import './style.scss';

import { Component, Vue } from 'vue-property-decorator';
import { errorService } from '@/services/errors';
import { authApp } from '@/services/auth';
import router from '@/router';
import { env } from '@/services/env';

@Component({
    template: require('./template.pug'),
})
export default class LoginView extends Vue {

    //#region [ data ]
    public logo = require('@/assets/img/icons/icon_256.png');
    public email: string = env.vars.defaults.login.user.email || '';
    public password: string = env.vars.defaults.login.user.password || '';
    public isWaiting: boolean = false;
    //#endregion

    //#region [ methods ]
    async login() {
        try {
            this.isWaiting = true;
            this.validation();
            await authApp.login({ email: this.email, password: this.password });
        } catch (err) {
            console.log(err);
            errorService.catchError(err, router);
        } finally {
            this.isWaiting = false;
        }
    }
    //#endregion

    //#region [ private ]
    private validation() {
        // tslint:disable-next-line: max-line-length
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.email.trim() == '') {
            throw new Error('Email is empty');
        }

        if (!re.test(this.email.toLowerCase())) {
            throw new Error('Email bad format');
        }
        if (this.password.trim() == '') {
            throw new Error('Password is empty');
        }
        if (this.password.length < 6) {
            throw new Error('Password required 6 character minimum');
        }
    }
    //#endregion
}
