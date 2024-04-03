module.exports = app => {
    require('../routes/authRoutes')(app);
    require('../routes/songRoutes')(app);
    require('../routes/userRoutes')(app);
}