function Promotion(year, major) {
    this.year = year
    this.major = major
}

function Signature(name, promotion, role, email, ownEmail, phone, list, withList) {
    this.name = name
    this.promotion = promotion
    this.role = role
    this.email = email
    this.ownEmailPerso = ownEmail
    this.phone = phone
    this.list = list
    this.withList = withList
}

Vue.component('PromotionInput', {
    data: function() {
        return {
            years: Array.from((function*(start, stop) {
              for (var i = start; i < stop; i++) yield i;
            })(2000, (new Date()).getFullYear() + 3)),
            majors: ['MRI', 'STI', 'ERE']
        }
    },
    props: {
        value: {
            type: Promotion,
            required: true,
        }
    },
    template: `
        <div class="input-group">
            <select class="custom-select" v-model="value.year">
                <option v-for="year in years" v-bind:value="year">{{year}}</option>
            </select>
            <select class="custom-select" v-model="value.major">
                <option v-for="major in majors" v-bind:value="major">{{major}}</option>
            </select>
        </div>
    `
})

var toast = function (target, text) {
    let el = document.querySelector(target);
    if (el == null) return;
    el.innerText = text;
    el.classList.remove('invisible');
    setTimeout(() => { el.classList.add('invisible'); }, 3000);
}

window.addEventListener('load', function() {
    new Vue({
        el: '#signature-app',
        delimiters: ['${', '}'],
        data: {
            prenom: '',
            nom: '',
            promotion: { year: 2010, major: 'MRI' },
            fonction: '',
            email: '',
            emailPerso: '',
            telephone: '',
            liste: 'alumni',
            avecListe: true,
        },
        mounted() {
            if (localStorage.getItem('adaSignature')) {
                try {
                    var data = JSON.parse(localStorage.getItem('adaSignature'));
                    Object.getOwnPropertyNames(data).forEach(key => {
                        this[key] = data[key];
                    });
                } catch(e) {
                    localStorage.removeItem('adaSignature');
                }
            }
        },
        methods: {
            save: function(event) {
                event.preventDefault();
                var data = Object.assign({}, this.$data);
                const parsed = JSON.stringify(data);
                localStorage.setItem('adaSignature', parsed);
            }
        }
    });

    new ClipboardJS('.btn-primary', {
        target: function(trigger) {
            toast("#signature-notification", "Signature hypertexte copiée");
            return document.querySelector("#signature-content");
        }
    });
    new ClipboardJS('.btn-secondary', {
        text: function(trigger) {
            toast("#signature-notification", "Code source de la signature copié");
            return document.querySelector("#signature-content").innerHTML
                .replace(/\n +/g, " ")
                .replace(/(<br>) */g, "$1\n")
                .replace(/(<\/p>) */g, "$1\n")
                .replace(/(<\/a>)(<\/p>) */g, "$1\n$2")
                .replace(/(<p[^>]+>) */g, "$1\n")
                .replace(/(<div[^>]+>) */g, "$1\n")
                .replace(/(<\/?span>) */g, "")
                .replace(/\n */g, "\n")
        }
    });
});
