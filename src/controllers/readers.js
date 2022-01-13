// const reader = require('../models/reader');
const { get } = require('express/lib/response');
const { Reader } = require('../models');

exports.create = async (req, res) => {

  const data = {
    name: 'Elizabeth Bennet',
    email: 'future_ms_darcy@gmail.com',
  };

  const newReader = await Reader.create(data);
    res.status(201).json(newReader);  
};

exports.read = async (req, res) => {
  const readers = await Reader.findAll();
  res.status(200).json(readers);
};


// exports.read = async (req, res) => {
//   const readerId = 3;
//   const reader = await Reader.findbyPK(readerId);
//   res.status(200).json(reader);
// };


exports.update = async (req, res) => {
  const readerId = 3;
  const updateData = {
    email: 'miss_e_bennet@gmail.com'
  };

  try {
  const [ updatedRows ] = await Reader.update(updateData, { where: {id: readerId} });
  res.status(200).json(updatedRows);
  } catch (err) {
    res.status(404).json(err)
  }


};


exports.destroy = async (req, res) => {
  const readerId = 3;

  try {
    const deletedRows = await Reader.destroy({ where: { id: readerId } });
    res.status(201).json(deletedRows);
  } catch (err) {
    res.send(404).json(err)
  } 

};
