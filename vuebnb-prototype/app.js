Vue.component('view-more', {
    template: `<button class="more" v-on:click="updateContractedVariable">{{ buttonText }}</button>`,
    data() {
        return {
            buttonText: '+ More'
        }
       
    },
    methods: {
        updateContractedVariable: function() {
            this.$parent.updateContracted();
            this.buttonText = this.buttonText == '+ More' ? '- Less' : '+ More';
        }
        
    }
});
var app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image' : 'url(sample/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false
    },
    watch: {
        modalOpen: function() {
            var className = 'modeal-open';
            if(this.modalOpen)
            {
                document.body.classList.add(className);
            }
            else
            {
                document.body.classList.remove(className);
            }
        }
    },
    created:  function() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
        document.removeEventListener('keyup',this.escapeKeyListener);
    },
    methods: {
        updateContracted() {
            this.contracted = !this.contracted;
        },
        escapeKeyListener(evt) {
            if(evt.keyCode == 27 && this.modalOpen) this.modalOpen = false;
        }
    }
});