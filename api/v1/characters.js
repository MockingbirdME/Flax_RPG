const express = require("express");
const createError = require("http-errors");

const Character = require("../../classes/Character");

const router = express.Router();

router.get("/:id", loadCharacter);
router.post("/:id", updateCharacter);
router.post("/", createCharacter);
router.delete("/:id", deleteCharacter);


function loadCharacter(req, res, next) {
  const {id} = req.params;
  
  Character.load(id)
    .then(response => {
      if (!response || !response.dataValues) {
        throw createError(404, `No character found with id ${id}`);
      }
      res.json(new Character(response.dataValues));
    })
    .catch(error => next(createError(error)));
}

function updateCharacter(req, res, next) {
  const {id} = req.params;
  
  Character.load(id)
    .then(response => {
      if (!response || !response.dataValues) {
        throw createError(404, `No character found with id ${id}`);
      }
      const character = new Character({...response.dataValues, ...req.body});
      character.save()
        .then(character => res.status(200).json(character));
    })
    .catch(error => next(createError(error)));
}

function createCharacter(req, res, next) {
  if (!req.body) throw createError(400, "Request body is requried for create character endpoint.");
  if (req.body.id) throw createError(400, "Invalid field 'id' passed into character creation.");

  const character = new Character(req.body);
  character.save()
    .then(character => res.status(201).json(character));
}

function deleteCharacter(req, res, next) {
  const {id} = req.params;
  
  Character.load(id)
    .then(databaseEntry => {
      if (!databaseEntry || !databaseEntry.dataValues) {
        throw createError(404, `No character found with id ${id}`);
      }
      databaseEntry.destroy()
        .then(character => res.status(200).json(character));
    })
    .catch(error => next(createError(error)));
}


module.exports = router;
