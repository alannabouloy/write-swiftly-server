module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/write-swiftly-database',
    JWT_SECRET: process.env.JWT_SECRET || 'roll-insight-nat20-get-whispers',
    DATABASE_NAME: process.env.DATABASE_NAME || 'write-swiftly-database',
    DATABASE_HOST: process.env.DATABASE_HOST
}