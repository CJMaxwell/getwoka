import hashPassword from '../helper/hashPassword';

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    avatar: DataTypes.STRING,
    skill: DataTypes.STRING,
    skillDescription: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  }, {});
  // User.associate = function(models) {
  //   // associations can be defined here
  // };

  User.beforeCreate(async (newUser) => {
    newUser.password = await hashPassword(newUser.password);
    return newUser;
  });
  return User;
};

export default user;
