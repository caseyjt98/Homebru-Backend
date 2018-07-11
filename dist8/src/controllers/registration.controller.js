"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const models_1 = require("../models");
const jsonwebtoken_1 = require("jsonwebtoken");
const rest_1 = require("@loopback/rest");
let RegistrationController = class RegistrationController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async registerUser(user) {
        // Check that required fields are supplied
        if (!user.email || !user.password) {
            throw new rest_1.HttpErrors.BadRequest('missing email or password');
        }
        // Check that user does not already exist
        let userExists = !!(await this.userRepo.count({ email: user.email }));
        if (userExists) {
            throw new rest_1.HttpErrors.BadRequest('user already exists');
        }
        //Hash the user's password before creating the user
        var bcrypt = require('bcryptjs');
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
        //let hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hash;
        let newUser = await this.userRepo.create(user);
        let jwt = jsonwebtoken_1.sign({
            user: {
                id: newUser.id,
                email: newUser.email
            }
        }, "qwerty", {
            issuer: "auth.ix.co.za",
            audience: "ix.co.za"
        });
        //dont just return jwt (string), return json object
        return {
            token: jwt
        };
    }
};
__decorate([
    rest_1.post('/registration'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerUser", null);
RegistrationController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], RegistrationController);
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=registration.controller.js.map