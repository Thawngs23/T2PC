
const session = require('express-session');
const Event = require('../models/Event');
const { mongooseToObject } = require('../../tools/mongoose');
const { countDocuments } = require('../models/Event');
const path = require('path');

var check;



class AdminController {

    dashboard(req, res) {
        check = {
            opendashboard: true,
        };

        res.render('admin-dashboard/dashboard', { check });
    }
    event(req, res, next) {
        check = {
            opendashboard: true,
        };
        Event.find({})
            .then((events) => {
                res.render('admin-dashboard/event', { events: mongooseToObject(events), check });
            })
            .catch(next);
        //    res.render('admin-dashboard/event',{check});
    }
    addEvent(req, res, next) {
        //upload ảnh lên sever
        const multer = require("multer");
        //khởi tạo biến cấu hình cho lưu trữ
        const diskStorage = multer.diskStorage({
            destination: (req, file, callback) => {
                // Định nghĩa nơi file upload sẽ được lưu lại
                callback(null, path.join(`${__dirname}../../../public/img/banner`));
            },
            filename: (req, file, callback) => {
                // Mình ví dụ chỉ cho phép tải lên các loại ảnh png & jpg
                let math = ["image/png", "image/jpeg"];
                if (math.indexOf(file.mimetype) === -1) {
                    let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
                    return callback(errorMess, null);
                }
                // Tên của file thì mình nối thêm một cái nhãn thời gian để đảm bảo không bị trùng.
                let filename = `${Date.now()}-T2PC-${file.originalname}`;
                callback(null, filename);
            }
        });
        let uploadFile = multer({ storage: diskStorage }).single("addImg");
        uploadFile(req, res, (error) => {
            if (error) {
                return res.send(`Error when trying to upload: ${error}`);
            }
        });
        // Tiến hành thêm event
        Event.countDocuments({}, function (err, countEvent) {
            //console.log(countEvent);
            const formData = {
                link: req.body.inputLink,
                img: '\\img\\banner\\' + req.file.filename,
                name: req.body.inputEventName,
                index: countEvent + 1,
            }
            const event = new Event(formData);
            event.save();
            res.redirect('/admin/event');
        });


    }
    delEvent(req,res,next){
        Event.findOneAndDelete({_id: req.params.id}, function(err,ev)
        {
            if(err) console.log(err);
            var fs = require('fs');
        fs.unlink(path.join(`${__dirname}..\\..\\..\\public` + ev.img), function (err) {
         if (err) throw err;
  
});
            console.log('deleted image name: ' + ev.img);
            res.redirect('back');
        })
       
       
    }
}

module.exports = new AdminController();
