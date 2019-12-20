const express = require("express");
const router = express.Router();


/* Blodsukker model */
const Blodsukker = require('../../Models/blodsukker.js');

//TODO: Gjøre routes access til private når auth blir implementert

/* @route   GET api/blodsukker */
/* @desc    Get Alle blodsukker */
/* @access  Public */
router.get("/", (req, res) => {
    Blodsukker.find()
        .sort({date: -1})
        .then(blodsukker => {
            res.json(blodsukker)
        })
});

/* @route   POST api/blodsukker/new */
/* @desc    Lagre nytt blodsukker m/ insulin */
/* @access  Public */
router.post("/new", (req, res) => {
    const nyttBlodsukker = new Blodsukker({
        blodsukker: req.body.blodsukker,
        insulin: req.body.insulin,
    });

    nyttBlodsukker.save()
        .then(blodsukker => {
            res.json(blodsukker)
        })

});

/* @route   DELETE api/blodsukker/delete/:id */
/* @desc    Slette blodsukker m/ insulin basert på _ID */
/* @access  Public */
router.delete("/delete/:id", (req, res) => {
    blodsukker.findById(req.params.id)
        .then(blodsukker => {
            blodsukker.remove()
                .then(() => {
                    res.json({
                        message: "Sletting fullført"
                    })
                })
        })
        .catch(err => 
            res.status(404)
            .json({Error: req.params.id + "kan ikke slettes da denne ID ikke eksisterer i databasen."})
        )
})

module.exports = router;