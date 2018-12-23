var typingTimer;                //timer identifier
var doneTypingInterval = 3000;  //time in ms, 3 second for example

/**
 * Created by tuanbm2 on 05/10/2017.
 */
$(document).ready(function () {
    //load module theo ajax
    loadUserInfo();
    loadAccountInfo();
    loadPopupAccountInfo();
    loadDataRemain();
    loadPopupDataRemain();
    loadPromotions();

});

function loadUserInfo() {
    var urlFor = $("#userInfo").attr("urlFor");
    $.ajax({
        url: urlFor,
        cache: true,
        type: "Post",
        data: {},
        success: function (result) {
            $("#userInfo").html(result.content);
        },
        error: function (request, status, err) {
        }
    });
}

function loadAccountInfo() {
    var urlFor = $("#accountInfo").attr("urlFor");
    $.ajax({
        url: urlFor,
        cache: true,
        type: "Post",
        data: {},
        success: function (result) {
            $("#tkchinh").html(result.tkchinh);
            $("#tkkm").html(result.tkkm);
            $("#cuoctamtinh").html(result.cuoctamtinh);
            $("#nocuoc").html(result.nocuoc);
        },
        error: function (request, status, err) {
        }
    });
}

function loadPopupAccountInfo() {
    var urlFor = $("#myPopover").attr("urlFor");
    $.ajax({
        url: urlFor,
        cache: true,
        type: "Post",
        data: {},
        success: function (result) {
            $("#myPopover").html(result.content);
        },
        error: function (request, status, err) {
        }
    });
}

function loadDataRemain() {
    var urlFor = $("#packdata-main").attr("urlFor");
    $.ajax({
        url: urlFor,
        cache: true,
        type: "Post",
        data: {},
        success: function (result) {
            $("#span-data-remain").html(result.package);
            $("#b-data-remain").html(result.remain);
            $("#date-remain").html(result.dayRemain);
        },
        error: function (request, status, err) {
        }
    });
}

function loadPopupDataRemain() {
    var urlFor = $("#myPopoverData").attr("urlFor");
    $.ajax({
        url: urlFor,
        cache: true,
        type: "Post",
        data: {},
        success: function (result) {
            var length = result.content.trim().length;
            if(length > 0){
                $("#myPopoverData").html(result.content);
            }else{
                $("#myPopoverData").hide();
                $("#a-myPopoverData").attr("href","javascript:void(0);");
            }


        },
        error: function (request, status, err) {
        }
    });
}

function loadListDataPlus() {
    var urlFor = $("#lisDataPlus").attr("urlFor");
    $.ajax({
        url: urlFor,
        cache: true,
        type: "Post",
        data: {},
        success: function (result) {
            $("#lisDataPlus").html(result.content);
        },
        error: function (request, status, err) {
        }
    });
}

function loadPromotions() {
    var urlFor = $("#loadPromotion").attr("urlFor");
    $('.loading').show();
    $.ajax({
        url: urlFor,
        cache: true,
        type: "Post",
        data: {},
        success: function (result) {
            $('.loading').hide();
            $("#loadPromotion").html(result.content);
        },
        error: function (request, status, err) {
        }
    });
}

$.vtPromotionAlert = function(opts) {
    if (typeof opts === 'undefined') opts = {};

    var default_opts = {
        title: 'Xác nhận',
        message: '',
        isConfirm: true,
        removeCloseBtn: false,
        success: function() {}
    }
    opts = $.extend(default_opts, opts);

    var theModal = $('#promotionAlert');
    theModal.addClass('active');
    theModal.find('.modal-title').text(opts.title);
    theModal.find('.message').text(opts.message);
    if(opts.isConfirm == true) {
        theModal.find('a[data-action="close"]').show('fast', function() {
            $(this).unbind('click').on('click', function(e) {
                $(this).closest('.modal').removeClass('active');
                opts.success();
            });
        });
    } else {
        theModal.find('a[data-action="close"]').hide();
    }

    if(opts.removeCloseBtn == true) {
        theModal.find('a.icon-close').hide();
    } else {
        theModal.find('a.icon-close').show();
    }
}

$.vtPromotionVtfreeAlert = function(opts) {
    if (typeof opts === 'undefined') opts = {};

    var default_opts = {
        title: 'Xác nhận',
        message: '',
        isConfirm: true,
        isItalk: false,
        removeCloseBtn: false,
        success: function() {}
    }
    opts = $.extend(default_opts, opts);

    var theModal = $('#vtfreeAlert');
    theModal.addClass('active');
    theModal.find('.modal-title').text(opts.title);
    theModal.find('.message').text(opts.message);
    $('#sdt-member').remove();
    if(opts.isConfirm == true) {
        theModal.find('a[data-action="close"]').show('fast', function() {
            $(this).unbind('click').on('click', function(e) {
                $(this).closest('.modal').removeClass('active');
                opts.success();
            });
        });
    } else {
        theModal.find('a[data-action="close"]').hide();
    }

    if(opts.removeCloseBtn == true) {
        theModal.find('a.icon-close').hide();
    } else {
        theModal.find('a.icon-close').show();
    }
}

function getMoneyAdvanceConfig(obj) {
    var modal = $($(obj).attr('href'));
    modal.find('.modal-body .message').html('<img src="/myvt/img/loading.gif">');
    modal.find('.modal-footer').html('');
    $.ajax({
        url: $(obj).attr('data-url'),
        cache: true,
        type: "Post",
        success: function (result) {
            if(result.errorCode == 0) {
                modal.find('.modal-body .message').html(result.content);
                modal.find('.modal-footer').html('<a href="javascript:void(0)" class="btn btn-positive btn-block" data-target="'+$(obj).attr('href')+'" data-url="'+result.url+'" onclick="processMoneyAdvance(this)">ĐỒNG Ý</a>');
            }else{
                modal.find('.modal-body .message').html(result.message);
            }
        },
        error: function (request, status, err) {
        }
    });
}

function processMoneyAdvance(obj) {
    $('#vtLoadingIcon').addClass('active');
    var modal = $($(obj).attr('data-target'));
    modal.removeClass('active');
    $.ajax({
        url: $(obj).attr('data-url'),
        cache: true,
        type: "Post",
        success: function (result) {
            $('#vtLoadingIcon').removeClass('active');
            modal.addClass('active');
            modal.find('.modal-body .message').html(result.message);
            modal.find('.modal-footer').html('');
        },
        error: function (request, status, err) {
        }
    });
}

$(document).on('click', '#showLinkedAcc', function(){
    var modalDTK = $('#popoverTaiKhoan');
    if ($('#popup-wap-myviettel').is(":visible")){
        modalDTK.css('top', '140px');
    }
    var url = $('#urlAjaxGetLinkedAcc').val();
    var loading2 = '<ul class="group-tai-khoan">'+
        '<p class="text-center loading2" style="display: block;"><img src="/myvt/img/loading.gif"> </p>'+
        '</ul>';
    var contentDTK = $('.contentDTK');
    var errorMsg = '<div style="text-align: center; padding: 10px; font-style: 300; color: red">Hệ thống đang bận. Vui lòng thử lại sau!</div>';
    contentDTK.empty();
    contentDTK.append(loading2);

    $.ajax({
        url: url,
        cache: false,
        type: 'POST',
        //dataType: 'json',
        timeout: 5000,
        success: function (result) {
            contentDTK.empty();
            if (result.errorCode == 0) {
                contentDTK.append(result.template);
            } else {
                contentDTK.append(errorMsg);
            }

        },
        error: function (request, status, err) {
            contentDTK.empty();
            contentDTK.append(errorMsg);
        }
    });
});
