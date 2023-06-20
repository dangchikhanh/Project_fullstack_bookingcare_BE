'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [{
            email: 'dangchikhanh.2003@gmail.com',
            password: 'khanh1212',
            firstName: 'Khanh',
            lastName: 'Aka Dang',
            address: 'HCM',
            gender: '1',
            typeRole: 'ROLE',
            keyRole: 'R1',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};