import { Router } from 'express';
import chirpStore  from '../utils/chirpstore';
const router = Router();

router.get('/', (req,res) => {

let data = chirpStore.GetChirps();
const chirps = Object.keys(data).map(key => {
    return { id: key,
        username: data[key].username,
        message: data[key].message,
    }})
    chirps.pop();
res.json(chirps)

    
});

router.get('/:id', (req, res) => {
    let id = req.params.id
    chirpStore.GetChirp(id)
})

router.post('/', (req, res) => {
    const chirp = {
        username: req.body.username,
        message: req.body.message,
    };
    chirpStore.CreateChirp(chirp);
    res.sendStatus(200);
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    chirpStore.DeleteChirp(id);
    res.sendStatus(200);
})

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const chirp = {
        username: req.body.username,
        message: req.body.message,
    };
    chirpStore.UpdateChirp(id,chirp);
    res.sendStatus(200);
})

 export default router;