export const LoginSelectors = {
    mailLogin: 'id=com.fdc_machetalk_broadcaster:id/tvLogin',
    mailSNSBtn: 'id=com.fdc_machetalk_broadcaster:id/btnOtherMethod',
    submitBtn: 'id=com.fdc_machetalk_broadcaster:id/btnLogin',
    inputEmail: 'id=com.fdc_machetalk_broadcaster:id/txtEmail',
    inputPassword: 'id=com.fdc_machetalk_broadcaster:id/txtPassword',
    getErrMsg: 'id=com.fdc_machetalk_broadcaster:id/tvErrorMsg',
    permissionDialog: 'id=com.fdc_machetalk_broadcaster:id/ll_permission_dialog',
};

export const SearchScreenSelectors = {
    // ---call settings---
    searchPageNav: '(//android.widget.ImageView[@resource-id="com.fdc_machetalk_broadcaster:id/icon"])[1]',
    callSettingsBtn: 'id=com.fdc_machetalk_broadcaster:id/image_button_settings',
    callSettingsStatus: 'id=com.fdc_machetalk_broadcaster:id/tv_status_info',
    closedBtn: 'id=com.fdc_machetalk_broadcaster:id/btnCancel',

    // -- call appeal --
    appealIcon: 'id=com.fdc_machetalk_broadcaster:id/rlStrength',
    callSettingsVisible: 'id=com.fdc_machetalk_broadcaster:id/rl_options',
    toastMessage: 'id=com.fdc_machetalk_broadcaster:id/tv_message',

    // -- call appeal 5mins prevention --
    callAppealDialog: 'id=com.fdc_machetalk_broadcaster:id/dialog_container',
    okDialog: 'id=com.fdc_machetalk_broadcaster:id/confirmButton',

    // -- template icon -- 
    templateSearch: 'id=com.fdc_machetalk_broadcaster:id/card_view_template',

    

}; 

export const TemplateSelectors = { 

    // -- template screen --
    templateIcon: 'id=com.fdc_machetalk_broadcaster:id/template_button',
    createTemplate: 'id=com.fdc_machetalk_broadcaster:id/create_template_clickable',
    templateTitle: 'id=com.fdc_machetalk_broadcaster:id/tv_header_title',
    templateDescription: 'id=com.fdc_machetalk_broadcaster:id/et_template_content',

    // -- camera thumbnail status --
    iconThumbImage: 'id=img com.fdc_machetalk_broadcaster:id/template_img',
    iconThumbDefault: 'id=com.fdc_machetalk_broadcaster:id/img_empty_template',
    
    // -- save function -- 
    saveTemplate: 'id=com.fdc_machetalk_broadcaster:id/rl_confirm',
    successModal: 'id=com.fdc_machetalk_broadcaster:id/message',
    confirmBtn: 'id=com.fdc_machetalk_broadcaster:id/confirmButton',

    //camera icon
    btnIDCam: 'id=com.fdc_machetalk_broadcaster:id/rl_template_image',
    // -- video icon --
    btnIDVideo: "id=com.fdc_machetalk_broadcaster:id/rl_template_video",

    // -- capture --
    btnCamera: 'id=com.fdc_machetalk_broadcaster:id/tv_camera',
    btnCapture: 'id=com.android.camera2:id/shutter_button',
    btnConfirm: 'id=com.android.camera2:id/done_button',
    btnUpload: 'id=com.fdc_machetalk_broadcaster:id/tv_use_photo',

     // -- gallery --
     btnGallery: 'id=com.fdc_machetalk_broadcaster:id/tv_gallery',
     //>>>> custom locator <<<<<
     deviceFile: '//*[@resource-id="com.google.android.apps.photos:id/title" and @text="Download"]',
     deviceGallery: 'id=com.google.android.apps.photos:id/recycler_view',
     galleryItems: '//android.support.v7.widget.RecyclerView/android.widget.ImageView',


     
    // -- close/ cancel button -- 
    closedTemplate: 'id=com.fdc_machetalk_broadcaster:id/close_button',
    cancelBtn: 'id=com.fdc_machetalk_broadcaster:id/tv_cancel',

    // -- template deletion --
    deleteTemplate: 'id=com.fdc_machetalk_broadcaster:id/btn_delete',
    deletionModalText: 'id=com.fdc_machetalk_broadcaster:id/tv_title', //テンプレートを削除 
    confirmDeletion: 'id=com.fdc_machetalk_broadcaster:id/rl_dialog_confirm',

    // -- template item -
    templateList: '//androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout',
    postedText: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/tv_content" and string-length(@text) > 0]',

    // -- library permission --
    libraryDialog: "id=com.android.permissioncontroller:id/grant_singleton",
    allowLibrary: "id=com.android.permissioncontroller:id/permission_allow_all_button",

};

export const MyPageSelectors = {
    // --- My Page Items ---
    myPageNav: '(//android.widget.ImageView[@resource-id="com.fdc_machetalk_broadcaster:id/icon"])[5]',
    myPageSettings: 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fdc_machetalk_broadcaster:id/rl_settings"))',
    myPageTemplateSettings: 'id=com.fdc_machetalk_broadcaster:id/linear_layout_template_settings',
    myPageNotificationSettings: 'id=com.fdc_machetalk_broadcaster:id/linear_layout_notification_settings',
    myPageStreamingBonus: 'id=com.fdc_machetalk_broadcaster:id/linear_layout_broadcast_bonus',
    myPageEditPage: 'id=com.fdc_machetalk_broadcaster:id/tv_edit',

    // -- Logout --
    logoutBtn: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.fdc_machetalk_broadcaster:id/rv_settings_menu"]/android.widget.RelativeLayout[9]',
    logoutModal: 'id=com.fdc_machetalk_broadcaster:id/rl_message',
    logoutConfirm: 'id=com.fdc_machetalk_broadcaster:id/rl_dialog_confirm',

    // -- Acquired Stars -- 
    mypageStar: "id=com.fdc_machetalk_broadcaster:id/rl_stars",
    ownStars: "id=com.fdc_machetalk_broadcaster:id/tvStar",
    closeWebView: "id=com.fdc_machetalk_broadcaster:id/btnClose",
    //to get the stars amount via webview
    starwebV: '//android.webkit.WebView//android.view.View[@text and not(@text="")]',
    //to get element is displaed via webview
    successDisplay: '//android.webkit.WebView//android.widget.TextView[@text="WEBで検索してね！"]',

    // -- Streaming Bonus Webview -- 
    streamingWebview: '//android.widget.TextView[@text="ボーナス獲得状況を確認"]',

    // -- Template Settings -- 
    titleTemplateWording: "id=com.fdc_machetalk_broadcaster:id/actionBarTitle",
}

export const NotificationSettingsSelectors = {
    vibrateToggle: 'id=com.fdc_machetalk_broadcaster:id/cb_viber_setting',
    soundToggle: 'id=com.fdc_machetalk_broadcaster:id/cb_sound_setting',
    notificationsToggle: 'id=com.fdc_machetalk_broadcaster:id/cb_inn_app_general',

    backBtn: 'id=com.fdc_machetalk_broadcaster:id/btn_backs',
}

export const AttackTabSelectors = {
    attackTab: '//android.widget.TextView[@text="アタック"]',
    userList: 'id=com.fdc_machetalk_broadcaster:id/listItemHolder',
    sendTemplateBtn: 'id=com.fdc_machetalk_broadcaster:id/linear_layout_template',
    userNickName: 'id=com.fdc_machetalk_broadcaster:id/nickName',
    templateOFF: 'id=com.fdc_machetalk_broadcaster:id/error_content',
    closedImg: 'id=com.fdc_machetalk_broadcaster:id/image_button_close',
    tempList: 'id=com.fdc_machetalk_broadcaster:id/rv_template',
    setTemplate: 'id=com.fdc_machetalk_broadcaster:id/btn_template_setting',
}

export const TimelinePageSelectors = { 
    timelineNav: '(//android.widget.ImageView[@resource-id="com.fdc_machetalk_broadcaster:id/icon"])[4]',
    newPost: 'id=com.fdc_machetalk_broadcaster:id/fl_new_post',
    postText: 'id=com.fdc_machetalk_broadcaster:id/et_post_text',
    postCamera: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/fl_image_container"][1]',
    postGallery: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/fl_image_container"]',
    uploadImagePreview: 'id=com.fdc_machetalk_broadcaster:id/iv_selected_photo',
    uploadImageCancel: 'id=com.fdc_machetalk_broadcaster:id/iv_selected_photo_dismiss',

    // -- save function -- 
    submitPost: 'id=com.fdc_machetalk_broadcaster:id/rl_confirm',

    // -- capture and library --
    btnCapture: 'id=com.android.camera2:id/shutter_button',
    btnConfirm: 'id=com.android.camera2:id/done_button',
    btnUpload: 'id=com.fdc_machetalk_broadcaster:id/tv_use_photo',

    // -- library permission --
    libraryDialog: "id=com.android.permissioncontroller:id/grant_singleton",
    allowLibrary: "id=com.android.permissioncontroller:id/permission_allow_all_button",
    //>>>> custom locator <<<<<
     deviceFile: '//*[@resource-id="com.google.android.apps.photos:id/title" and @text="Download"]',
     deviceGallery: 'id=com.google.android.apps.photos:id/recycler_view',
     galleryItems: '//android.support.v7.widget.RecyclerView/android.widget.ImageView',

    // -- in-review status -- 
    approval: 'id=com.fdc_machetalk_broadcaster:id/tv_for_approval_message',
    timelineList: '//androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout',

    // -- post in review , if actual post display on the list -- 
    postedText: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/tv_content" and string-length(@text) > 0]',

    // -- empty list -- 
    emptyTimeline: 'id=com.fdc_machetalk_broadcaster:id/empty_result',
    emptyText: 'id=com.fdc_machetalk_broadcaster:id/tv_empty_result',
    postOption: 'id=com.fdc_machetalk_broadcaster:id/btn_close',
    
    // -- deletion --
    postDelModalText: 'id=com.fdc_machetalk_broadcaster:id/tv_title',
    postDelCancel: 'id=com.fdc_machetalk_broadcaster:id/rl_csancel',
    postDelConfirm: 'id=com.fdc_machetalk_broadcaster:id/rl_dialog_confirm',
    postDelToast: 'id=com.fdc_machetalk_broadcaster:id/text_view_message',

    // -- timeline tabs --
    tab1: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/tab_title" and @text="すべて"]',
    tab2: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/tab_title" and @text="フォロー中"]',
    tab3: '//*[@resource-id="com.fdc_machetalk_broadcaster:id/tab_title" and @text="自分の投稿"]',

    // >>> 1st tab locators <<<
    // --sorting-- 
    sortLabel: 'id=com.fdc_machetalk_broadcaster:id/tv_sort_label',
    sortRecommended: 'id=com.fdc_machetalk_broadcaster:id/rl_timeline_sort_type_recommended',
    sortLatest: 'id=com.fdc_machetalk_broadcaster:id/rl_timeline_sort_type_new_arrival',
    sortWording: '//android.widget.RelativeLayout/android.widget.TextView',

    // --comment icon-- 
    commentIcon: 'id=com.fdc_machetalk_broadcaster:id/ll_comment',
    commentText: 'id=com.fdc_machetalk_broadcaster:id/etComment',
    commentPost: 'id=com.fdc_machetalk_broadcaster:id/btn_post',
    commentList: '//androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup',
    inreviewCom: 'id=com.fdc_machetalk_broadcaster:id/rl_comment_container',
    commentedText: 'id=com.fdc_machetalk_broadcaster:id/comment',
    commentOption: 'id=com.fdc_machetalk_broadcaster:id/btn_close',
    commentConfirmDelete: 'id=com.fdc_machetalk_broadcaster:id/rl_dialog_confirm',
    commentDeleteWording: 'id=com.fdc_machetalk_broadcaster:id/tv_title',
    commentDeletionToast: 'id=com.fdc_machetalk_broadcaster:id/rl_dialog_container'
} 

export const MessageSelectors = {
    messageNav: '(//android.widget.ImageView[@resource-id="com.fdc_machetalk_broadcaster:id/icon"])[2]',
    // -- messages tabs --
    unrepliedTab: '//android.widget.LinearLayout/android.widget.LinearLayout[1]',
    messageAllTab: '//android.widget.LinearLayout/android.widget.LinearLayout[2]',
    messageFollowTab: '//android.widget.LinearLayout/android.widget.LinearLayout[3]',
   
    messageList: '//androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout',
    userNickName: 'id=com.fdc_machetalk_broadcaster:id/text_view_nickname',
    msgTextBox: '//android.widget.LinearLayout/android.widget.EditText',
    msgStamp: 'id=com.fdc_machetalk_broadcaster:id/btn_stamp',
    msgBtnMic: 'id=com.fdc_machetalk_broadcaster:id/btn_mic',
    msgBtnGallery: 'id=com.fdc_machetalk_broadcaster:id/btn_upload',
    msgBtnCamera: 'id=com.fdc_machetalk_broadcaster:id/btn_camera',
    msgSendBtn: 'id=com.fdc_machetalk_broadcaster:id/btn_send',
    stampTabs: '//android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout',
    stampItems: '//android.widget.GridView/android.widget.ImageView',
   
}

export const EditPageSelectors = {
    itemSelfIntro: 'id=com.fdc_machetalk_broadcaster:id/tv_self_intro',
    editSelfIntro: 'id=com.fdc_machetalk_broadcaster:id/txt_edit_self_introduction',
    itemNickName: 'id=com.fdc_machetalk_broadcaster:id/tv_nickname',
    editNickName: 'id=com.fdc_machetalk_broadcaster:id/txt_edit_nickname',
    itemAge: 'id=com.fdc_machetalk_broadcaster:id/tv_age',
    itemRegion: 'id=com.fdc_machetalk_broadcaster:id/tv_region',
    itemWork: 'id=com.fdc_machetalk_broadcaster:id/tv_occupation',
    itemHeight: 'id=com.fdc_machetalk_broadcaster:id/tv_height',
    itemType: 'id=com.fdc_machetalk_broadcaster:id/tv_body_type',
    itemPersonality: 'id=com.fdc_machetalk_broadcaster:id/tv_personality',
    itemHobby: 'id=com.fdc_machetalk_broadcaster:id/tv_hobby',
    itemActiveTime: 'id=com.fdc_machetalk_broadcaster:id/tv_active_time',

    btnSave: 'id=com.fdc_machetalk_broadcaster:id/btnSave',

    uploadImg: 'id=com.fdc_machetalk_broadcaster:id/iv_profile_upload_icon',
    uploadSelection: 'id=com.fdc_machetalk_broadcaster:id/ll_upload_selection',
    profileGallery: 'id=com.fdc_machetalk_broadcaster:id/tv_gallery',
    profileCamera: 'id=com.fdc_machetalk_broadcaster:id/tv_camera',


    // -- permission --
    permissionDialog: 'id=com.android.permissioncontroller:id/grant_dialog',
    allowCamPermission: 'id=com.android.permissioncontroller:id/permission_allow_foreground_only_button',
    allowAllLibrary: 'id=com.android.permissioncontroller:id/permission_allow_all_button',

    folderList: '//android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]',
    galleryImageList: 'id=com.google.android.apps.photos:id/recycler_view',
    galleryImageItems: '//android.support.v7.widget.RecyclerView/android.widget.ImageView',
    cropLayout: 'id=com.fdc_machetalk_broadcaster:id/crop_overlay_layout',

    btnCapture: 'id=com.android.camera2:id/shutter_button',
    btnConfirm: 'id=com.android.camera2:id/done_button',
    btnUpload: 'id=com.fdc_machetalk_broadcaster:id/tv_use_photo',
    inReview: 'id=com.fdc_machetalk_broadcaster:id/underExaminationTxt',
    profilePic: 'id=com.fdc_machetalk_broadcaster:id/rl_image_clickable',   

    // -- picker --
    elementPicker: '//android.widget.NumberPicker',
    inputPicker: 'id=android:id/numberpicker_input',
    saveBtn: 'id=com.fdc_machetalk_broadcaster:id/tv_confirm',
    
    // -edit page display- 
    displayEditPage: 'id=com.fdc_machetalk_broadcaster:id/scrollView',

}

export const LaunchRouterSelectors = {
    // Destination markers — one element uniquely present on each cold-launch landing.
    // ⚠️ Verify these resource-ids in Appium Inspector against real cold-launch landings.
    homeAttackTab: '//android.widget.TextView[@text="アタック"]',        // HOME_ATTACK_TAB
    loginOnboarding: 'id=com.fdc_machetalk_broadcaster:id/tvLogin',      // LOGIN_ONBOARDING
    profileEdit: 'id=com.fdc_machetalk_broadcaster:id/scrollView',       // PROFILE_EDIT (edit page scroll container)

    // System crash / ANR dialog (best-effort; verify on device)
    anrCloseBtn: 'id=android:id/aerr_close',
}

export const VariousSettingsSelectors = {
    accountSettings: '//android.widget.TextView[@resource-id="com.fdc_machetalk_broadcaster:id/menu_label" and @text="アカウント"]',
    videoCallSettings: 'id=com.fdc_machetalk_broadcaster:id/cb_video_call',
    audioCallSettings: 'id=com.fdc_machetalk_broadcaster:id/cb_voice_call',
    callPermission: 'id=com.android.permissioncontroller:id/grant_dialog',
    allowPermission: 'id=com.android.permissioncontroller:id/permission_allow_one_time_button',
    allowConnectivity: 'id=com.android.permissioncontroller:id/permission_allow_button',

    //email
    snsMail: 'id=com.fdc_machetalk_broadcaster:id/btn_mail',
    emailField: 'id=com.fdc_machetalk_broadcaster:id/txtEmail',
    passwordField: 'id=com.fdc_machetalk_broadcaster:id/txtPassword',
    confirmPassField: 'id=com.fdc_machetalk_broadcaster:id/txtConfPassword',
    errorSnsMsg: 'id=com.fdc_machetalk_broadcaster:id/txtErrorMsg',
    saveSns: 'id=com.fdc_machetalk_broadcaster:id/btnSubmit',
    showPass: 'id=com.fdc_machetalk_broadcaster:id/imgShowPassword',
    showConfirmPass: 'id=com.fdc_machetalk_broadcaster:id/imgShowConfPassword',

}