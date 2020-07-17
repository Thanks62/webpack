import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTrans from '../public/language/en.json';
import chTrans from '../public/language/ch.json';
i18n.use(initReactI18next).init({
    fallbackLng:'en',//default lang
    debug:true,
    interpolation:{
        escapeValue:false
    },
    resources:{
        en:{
            translation:enTrans
        },
        ch:{
            translation:chTrans
        }
    }
});
export default i18n;