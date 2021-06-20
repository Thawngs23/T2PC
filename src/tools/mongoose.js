module.exports = {
    mongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
};
