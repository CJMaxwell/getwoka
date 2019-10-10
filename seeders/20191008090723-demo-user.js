module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Ahmed Chinedu',
      lastName: 'Adeoye',
      phoneNumber: '+234 806 234 1444',
      password: 'Hello world',
      dateOfBirth: '1990-08-20',
      avatar: 'map.google.com',
      skill: 'Fashion Designer',
      skillDescription: 'Slay on the grams with our up to date fashion styles',
      city: 'Yaba',
      state: 'Lagos',
      country: 'Nigeria',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Kate Ubong',
      lastName: 'Osazuwa',
      phoneNumber: '+234 806 234 2001',
      password: '@@world!',
      dateOfBirth: '1995-05-15',
      avatar: 'images.google.com',
      skill: 'Mechcnical Engineer',
      skillDescription: 'We are help to help out at every breakdown',
      city: 'Ibadan',
      state: 'Oyo',
      country: 'Nigeria',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
