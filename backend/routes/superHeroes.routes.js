const Router = require('express');

const { getSuperHero, getAllSuperHeroes, getAllMarvel, getAllDc, filterSuperHeroes, createSuperHero, updateSuperHero, deleteSuperHero } = require('../controllers/superHeroes.controllers');

const router = Router()

router.get('/superheroes', getAllSuperHeroes)
router.get('/marvel', getAllMarvel)
router.get('/dc', getAllDc)
router.post('/superhero', getSuperHero)
router.post('/filter-superheroes', filterSuperHeroes)
router.post('/create-superhero', createSuperHero)
router.post('/update-superhero', updateSuperHero)
router.post('/delete-superhero', deleteSuperHero)

module.exports = router