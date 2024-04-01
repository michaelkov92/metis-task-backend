const adminRoutes = require('./words');
const shopRoutes = require('./shop');

const registerRoutes = (app) => {
    app.use('/admin', adminRoutes);
    app.use('/shop', shopRoutes);
}

module.exports = registerRoutes;
