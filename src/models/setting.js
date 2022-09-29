const mongoose = require("mongoose");
const SettingSchema = mongoose.Schema({
    membershipApiPath: {
        type: String,
        required: true
    },
    membershipLids: {
        type: [Number],
        rquired: true
    },
    semrushDomainOverviewLimit: {
        type: Number,
        default: 50
    },
    semrushKeywordOverviewLimit: {
        type: Number,
        default: 50
    },
    semrushCookie: {
        type: String,
        default: ""
    },
    spyfuDomainOverviewLimit: {
        type: Number,
        default: 50
    },
    spyfuKeywordOverviewLimit: {
        type: Number,
        default: 50
    },
    spyfuCookie: {
        type: String,
        default: ""
    },
    seolyzeDomainOverviewLimit: {
        type: Number,
        default: 50
    },
    seolyzeKeywordOverviewLimit: {
        type: Number,
        default: 50
    },
    seolyzeCookie: {
        type: String,
        default: ""
    }
});

const Setting = mongoose.model('setting', SettingSchema);

module.exports = Setting;