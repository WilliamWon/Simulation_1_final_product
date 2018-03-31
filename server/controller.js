module.exports = {
    get: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
            .then((inventory) => res.status(200).send(inventory))
            .catch(()=> res.status(500).send());
    },
    create: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {name, price, image_url} = req.body;
        dbInstance.create_product([name,price,image_url])
            .then(()=> res.status(200).send())
            .catch(()=> res.status(500).send());
    }

}