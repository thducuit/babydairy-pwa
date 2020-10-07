"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./containers/home/home.component");
var about_component_1 = require("./containers/abouts/about/about.component");
var page_layout_component_1 = require("./layouts/page-layout/page-layout.component");
var qa_component_1 = require("./containers/abouts/qa/qa.component");
var testimonial_component_1 = require("./containers/abouts/testimonial/testimonial.component");
var service_component_1 = require("./containers/services/service/service.component");
var insurance_component_1 = require("./containers/services/insurance/insurance.component");
var factsheet_component_1 = require("./containers/services/factsheet/factsheet.component");
var doctor_component_1 = require("./containers/doctor/doctor.component");
var video_component_1 = require("./containers/news/video/video.component");
var event_component_1 = require("./containers/news/event/event.component");
var career_component_1 = require("./containers/career/career.component");
var contact_component_1 = require("./containers/contact/contact.component");
var medical_component_1 = require("./containers/medical/medical.component");
var search_component_1 = require("./containers/search/search.component");
var news_detail_component_1 = require("./containers/news/news-detail/news-detail.component");
var doctor_detail_component_1 = require("./containers/doctor/doctor-detail/doctor-detail.component");
var service_detail_component_1 = require("./containers/services/service/service-detail/service-detail.component");
var career_detail_component_1 = require("./containers/career/career-detail/career-detail.component");
var insurance_membership_component_1 = require("./containers/insurance/insurance-membership/insurance-membership.component");
var insurance_consulting_component_1 = require("./containers/insurance/insurance-consulting/insurance-consulting.component");
var insurance_detail_component_1 = require("./containers/insurance/insurance-detail/insurance-detail.component");
var not_found_component_1 = require("./containers/not-found/not-found.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'about-us',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: 'aih-hospital',
                component: about_component_1.AboutComponent,
            },
            {
                path: 'faq',
                component: qa_component_1.QaComponent,
            },
            {
                path: 'testimonial',
                component: testimonial_component_1.TestimonialComponent,
            },
        ],
    },
    {
        path: 'patient-services',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: 'medical-services',
                component: service_component_1.ServiceComponent,
            },
            {
                path: 'medical-services/:alias',
                component: service_detail_component_1.ServiceDetailComponent,
            },
            {
                path: 'medical-package',
                component: medical_component_1.MedicalComponent,
            },
            {
                path: 'insurance',
                component: insurance_component_1.InsuranceComponent,
            },
            {
                path: 'factsheet',
                component: factsheet_component_1.FactsheetComponent,
            },
        ],
    },
    {
        path: 'doctor',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':alias',
                component: doctor_detail_component_1.DoctorDetailComponent,
            },
            {
                path: '',
                component: doctor_component_1.DoctorComponent,
            },
        ],
    },
    {
        path: 'news',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':alias',
                component: news_detail_component_1.NewsDetailComponent,
            },
            {
                path: '',
                component: event_component_1.EventComponent,
            },
        ],
    },
    {
        path: 'video',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: video_component_1.VideoComponent,
            },
        ],
    },
    {
        path: 'career',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':alias',
                component: career_detail_component_1.CareerDetailComponent,
            },
            { path: '', component: career_component_1.CareerComponent },
        ],
    },
    {
        path: 'contact',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: contact_component_1.ContactComponent,
            },
        ],
    },
    {
        path: 'search',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: search_component_1.SearchComponent,
            },
        ],
    },
    {
        path: 'insurance-services',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: insurance_membership_component_1.InsuranceMembershipComponent,
            }
        ],
    },
    {
        path: 'insurance-and-customer-services',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':id',
                component: insurance_consulting_component_1.InsuranceConsultingComponent,
            },
            {
                path: ':id/:alias',
                component: insurance_detail_component_1.InsuranceDetailComponent,
            }
        ],
    },
    // VN
    {
        path: 'gioi-thieu',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: 'benh-vien-aih',
                component: about_component_1.AboutComponent,
            },
            {
                path: 'hoi-dap',
                component: qa_component_1.QaComponent,
            },
            {
                path: 'y-kien-khach-hang',
                component: testimonial_component_1.TestimonialComponent,
            },
        ],
    },
    {
        path: 'dich-vu-y-khoa',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: 'chuyen-khoa',
                component: service_component_1.ServiceComponent,
            },
            {
                path: 'chuyen-khoa/:alias',
                component: service_detail_component_1.ServiceDetailComponent,
            },
            {
                path: 'goi-dich-vu',
                component: medical_component_1.MedicalComponent,
            },
            {
                path: 'bao-hiem',
                component: insurance_component_1.InsuranceComponent,
            },
            {
                path: 'thong-tin-noi-bat',
                component: factsheet_component_1.FactsheetComponent,
            },
        ],
    },
    {
        path: 'bac-sy',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':alias',
                component: doctor_detail_component_1.DoctorDetailComponent,
            },
            {
                path: '',
                component: doctor_component_1.DoctorComponent,
            },
        ],
    },
    {
        path: 'tin-tuc',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':alias',
                component: news_detail_component_1.NewsDetailComponent,
            },
            {
                path: '',
                component: event_component_1.EventComponent,
            },
        ],
    },
    {
        path: 'videos',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: video_component_1.VideoComponent,
            },
        ],
    },
    {
        path: 'tuyen-dung',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':alias',
                component: career_detail_component_1.CareerDetailComponent,
            },
            { path: '', component: career_component_1.CareerComponent },
        ],
    },
    {
        path: 'lien-he',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: contact_component_1.ContactComponent,
            },
        ],
    },
    {
        path: 'tim-kiem',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: search_component_1.SearchComponent,
            },
        ],
    },
    {
        path: 'dich-vu-bao-hiem',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: '',
                component: insurance_membership_component_1.InsuranceMembershipComponent,
            }
        ],
    },
    {
        path: 'dich-vu-khach-hang-va-bao-hiem',
        component: page_layout_component_1.PageLayoutComponent,
        children: [
            {
                path: ':id',
                component: insurance_consulting_component_1.InsuranceConsultingComponent,
            },
            {
                path: ':id/:alias',
                component: insurance_detail_component_1.InsuranceDetailComponent,
            }
            // {
            //     path: 'tu-van-thanh-vien/:id',
            //     component: MembershipConsultingComponent,
            // },
            // {
            //     path: 'thanh-vien/:alias',
            //     component: MembershipComponent
            // }
        ],
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent,
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, {
                    enableTracing: false,
                    useHash: false,
                }),
            ],
            exports: [router_1.RouterModule],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
