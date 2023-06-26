import CRUDService from "../services/CRUDService";

let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async(req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Port CRUD from server');
}

let displayGetCRUD = async(req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD', {
        dataTable: data
    });
}

let getEditCRUD = async(req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoId(userId);
        //Check if user data not found
        return res.render('editCRUD.ejs', { user: userData });
    } else {
        return res.send('User not found');
    }
}

let putCRUD = async(req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', { dataTable: allUsers });
}

let deleteCRUD = async(req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete CRUD Success');
    } else {
        return res.send('User not found!');
    }
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}