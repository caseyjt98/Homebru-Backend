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
let LoginController = class LoginController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    /** tests out that our jwt token works */
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "qwerty");
            return payload;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("invalid token");
        }
        /** the user is authenticated and we can progress */
    }
    async loginUser(user) {
        // Check that email and password are both supplied
        if (!user.email || !user.password) {
            throw new rest_1.HttpErrors.Unauthorized('missing email or password');
        }
        //Find the user with given email (should always be only one)
        let foundUser = await this.userRepo.findOne({
            where: {
                email: user.email
            },
        });
        var bcrypt = require('bcryptjs');
        //Check the found user's password with the given password
        if (!await bcrypt.compare(user.password, foundUser.password)) {
            throw new rest_1.HttpErrors.Unauthorized('invalid credentials');
        }
        let jwt = jsonwebtoken_1.sign({
            user: {
                id: foundUser.id,
                email: foundUser.email
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
    rest_1.get('/verify'),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "verifyToken", null);
__decorate([
    rest_1.post('/login'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "loginUser", null);
LoginController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map