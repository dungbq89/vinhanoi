function setButtonNavQuickview() { $("#quickview-nav-button a").hide(), $("#quickview-nav-button a").attr("data-index", "");
								  var a = $(currentLinkQuickView).closest(".slide").find("a.quick-view");
								  if (a.length > 0) {
									  for (var b = 0, c = 0; c < a.length; c++)
										  if ($(a[c]).data("handle") == $(currentLinkQuickView).data("handle")) { b = c;
																												 break }
									  b < a.length - 1 && ($("#quickview-nav-button .btn-next-product").show(), $("#quickview-nav-button .btn-next-product").attr("data-index", b + 1)), b > 0 && ($("#quickview-nav-button .btn-previous-product").show(), $("#quickview-nav-button .btn-previous-product").attr("data-index", b - 1)) }
								  $("#quickview-nav-button a").click(function() { $("#quickview-nav-button a").hide();
																				 var a = parseInt($(this).data("index"));
																				 if (!isNaN(a) && a >= 0) {
																					 var b = $(currentLinkQuickView).closest(".slide").find("a.quick-view");
																					 b.length > 0 && a < b.length && $(b[a]).trigger("click") } }) }

function initQuickView() { $(document).on("click", "#thumblist_quickview li", function() { changeImageQuickView($(this).find("img:first-child"), ".product-featured-image-quickview"), $(this).parent().parent().find("li").removeClass("active"), $(this).addClass("active") }), $(document).on("click", ".quick-view", function(a) {
	if ($(window).width() > 1025) { a.preventDefault(), dqdt.showPopup(".loading");
								   var b = $(this).data("handle");
								   currentLinkQuickView = $(this), Bizweb.getProduct(b, function(a) {
									   var b = $("#quickview-modal").html();
									   $(".quick-view-product").html(b);
									   var c = $(".quick-view-product");
									   if (null != a.summary && "" != a.summary) var d = a.summary;
									   else if (null != a.content) var d = a.content.replace(/(<([^>]+)>)/gi, "");
									   else var d = "";
									   var e = a.featured_image;
									   null == e && (e = "http://bizweb.dktcdn.net/thumb/grande/assets/themes_support/noimage.gif"), setButtonNavQuickview(), d = d.split(" ").splice(0, 60).join(" ") + "...", null != e && c.find(".view_full_size img").attr("src", e), a.price < 1 && a.variants.length < 2 ? (c.find(".price").html("Liên hệ"), c.find("del").html(""), c.find("#quick-view-product form").hide(), c.find(".prices").html('<span class="price h2">Liên hệ</span>'), c.find(".add_to_cart_detail span").html("Liên hệ")) : (c.find("#quick-view-product form").show(), c.find(".price").html(Bizweb.formatMoney(a.price, "{{amount_no_decimals_with_comma_separator}}₫"))), c.find(".product-item").attr("id", "product-" + a.id), c.find(".qv-link").attr("href", a.url), c.find(".variants").attr("id", "product-actions-" + a.id), c.find(".variants select").attr("id", "product-select-" + a.id), c.find(".qwp-name").text(a.name), c.find(".review .shopify-product-reviews-badge").attr("data-id", a.id), a.vendor ? c.find(".brand").append("<b>Nhãn hiệu: </b>" + a.vendor) : c.find(".brand").append("<b>Nhãn hiệu: </b>Không có"), a.available ? c.find(".availability").append("<b>&nbsp;Tình trạng: </b>Còn hàng") : c.find(".availability").append("<b>&nbsp;Tình trạng: </b>̀Hết hàng"), a.variants[0].sku ? c.find(".product-sku").append("<b>Mã sản phẩm: </b>" + a.variants[0].sku) : c.find(".product-sku").append("<b>Mã sản phẩm: </b>Không có"), c.find(".product-description").html(d), a.compare_at_price_max > a.price ? (c.find(".old-price").html(Bizweb.formatMoney(a.compare_at_price_max, "{{amount_no_decimals_with_comma_separator}}₫")).show(), c.find(".price").addClass("sale-price")) : (c.find(".old-price").html(""), c.find(".price").removeClass("sale-price")), a.available ? (quickViewVariantsSwatch(a, c), a.variants.length > 1 ? $("#quick-view-product form").show() : a.price < 1 ? $("#quick-view-product form").hide() : $("#quick-view-product form").show()) : (quickViewVariantsSwatch(a, c), c.find(".add_to_cart_detail").text("Hết hàng").addClass("disabled").attr("disabled", "disabled"), a.variants.length > 1 ? c.find("select, .dec, .inc, .variants label").show() : c.find("select, .dec, .inc, .variants label").hide()), c.find(".more_info_block .page-product-heading li:first, .more_info_block .tab-content section:first").addClass("active"), $("#quick-view-product").modal(), $(".view_scroll_spacer").removeClass("hidden"), loadQuickViewSlider(a, c), $(".quick-view").fadeIn(500), $(".quick-view .total-price").length > 0 && $(".quick-view input[name=quantity]").on("change", updatePricingQuickView), updatePricingQuickView(), $(".js-qty__adjust").on("click", function() {
										   var a = $(this),
											   c = (a.data("id"), a.siblings(".js-qty__num")),
											   d = parseInt(c.val().replace(/\D/g, "")),
											   d = validateQty(d);
										   a.hasClass("js-qty__adjust--plus") ? d += 1 : (d -= 1, d <= 1 && (d = 1)), c.val(d), updatePricingQuickView() }), $(".js-qty__num").on("change", function() { updatePricingQuickView() }) });
								   var c = document.querySelector(".quantity_wanted_p input");
								   return c.addEventListener("input", function() {
									   var a = this.value.match(/^\d+$/);
									   null === a && (this.value = ""), 0 == a && (this.value = 1) }, !1), !1 } }) }

function loadQuickViewSlider(a, b) { productImage();
									var c = $(".loading-imgquickview"),
										d = Bizweb.resizeImage(a.featured_image, "grande");
									if (b.find(".quickview-featured-image").append('<a href="' + a.url + '"><img src="' + d + '" title="' + a.title + '"/><div style="height: 100%; width: 100%; top:0; left:0 z-index: 2000; position: absolute; display: none; background: url(' + window.loading_url + ') 50% 50% no-repeat;"></div></a>'), a.images.length > 1) {
										var e = b.find(".more-view-wrapper ul");
										for (i in a.images) {
											var f = Bizweb.resizeImage(a.images[i], "grande"),
												h = (Bizweb.resizeImage(a.images[i], "compact"), '<li><a href="javascript:void(0)" data-imageid="' + a.id + '"" data-zoom-image="' + f + '" ><img src="' + f + '" alt="Proimage" /></a></li>');
											e.append(h) }
										e.find("a").click(function() {
											var a = b.find("#product-featured-image-quickview");
											a.attr("src") != $(this).attr("data-image") && (a.attr("src", $(this).attr("data-image")), c.show(), a.load(function(a) { c.hide(), $(this).unbind("load"), c.hide() })) }), e.owlCarousel({ navigation: !0, items: 4, margin: 10, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 3], itemsTabletSmall: [540, 3], itemsMobile: [360, 3] }).css("visibility", "visible") } else b.find(".quickview-more-views").remove(), b.find(".quickview-more-view-wrapper-jcarousel").remove() }

function quickViewVariantsSwatch(a, b) {
	var c = '<input type="hidden" name="id" value="' + a.id + '">';
	if (b.find("form.variants").append(c), a.variants.length > 1) {
		for (var d = 0; d < a.variants.length; d++) {
			var e = a.variants[d],
				f = '<option value="' + e.id + '">' + e.title + "</option>";
			b.find("form.variants > select").append(f) }
		var g = "product-select-" + a.id;
		new Bizweb.OptionSelectors(g, { product: a, onVariantSelected: selectCallbackQuickView }), 1 == a.options.length && b.find(".selector-wrapper:eq(0)").prepend("<label>" + a.options[0].name + "</label>"), b.find("form.variants .selector-wrapper label").each(function(b, c) { $(this).html(a.options[b].name) }) } else { b.find("form.variants > select").remove();
        var h = '<input type="hidden" name="variantId" value="' + a.variants[0].id + '">';
        b.find("form.variants").append(h) } }

function productImage() { $("#thumblist").owlCarousel({ navigation: !0, items: 4, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 4], itemsTablet: [768, 4], itemsTabletSmall: [540, 4], itemsMobile: [360, 4] }), $.prototype.fancybox && $("li:visible .fancybox, .fancybox.shown").fancybox({ hideOnContentClick: !0, openEffect: "elastic", closeEffect: "elastic" }) }

function updatePricingQuickView() {
	var a = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g,
		b = jQuery(".quick-view-product .price").text().match(a);
	if (b || (a = /([0-9]+[.|,][0-9]+)/g, b = jQuery(".quick-view-product .price").text().match(a)), b) {
		var c = b[0],
			d = c.replace(/[.|,]/g, ""),
			e = parseInt(jQuery(".quick-view-product input[name=quantity]").val()),
			f = d * e,
			g = Bizweb.formatMoney(f, "{{amount_no_decimals_with_comma_separator}}₫");
		g = g.match(a)[0];
		var h = new RegExp(c, "g"),
			i = jQuery(".quick-view-product .price").html().replace(h, g);
		jQuery(".quick-view-product .total-price span").html(i) } }

function validate(a) {
	var b = a || window.event,
		c = b.keyCode || b.which;
	c = String.fromCharCode(c);
	var d = /[0-9]|\./;
	d.test(c) || (b.returnValue = !1, b.preventDefault && b.preventDefault()) }
window.dqdt = window.dqdt || {}, dqdt.init = function() { dqdt.showPopup(), dqdt.hidePopup() }, $("span.caretfooter").click(function() { $(this).parents(".footer-fix-mb").toggleClass("active") }), $("i.icon-cart.fa.fa-shopping-cart").click(function(a) { $(window).width() < 992 && (window.location.href = "/cart") }), $(".filter-icon").click(function(a) { $(this).toggleClass("active"), $(".filter-container").toggleClass("active") }), dqdt.showNoitice = function(a) { $(a).animate({ right: "0" }, 500), setTimeout(function() { $(a).animate({ right: "-300px" }, 500) }, 3500) }, dqdt.showLoading = function(a) {
	var b = $(".loader").html();
	$(a).addClass("loading").append(b) }, dqdt.hideLoading = function(a) { $(a).removeClass("loading"), $(a + " .loading-icon").remove() }, dqdt.showPopup = function(a) { $(a).addClass("active") }, dqdt.hidePopup = function(a) { $(a).removeClass("active") }, initQuickView();
var product = {},
	currentLinkQuickView = "",
	option1 = "",
	option2 = "";
$(document).on("click", ".quickview-close, #quick-view-product .quickview-overlay, .fancybox-overlay", function(a) { $("#quick-view-product").modal("hide"), dqdt.hidePopup(".loading") }), $(document).on("click", ".quantity_wanted_p span.input-group-btn.data-up", function(a) {
	var b = parseInt($(this).parent().find("input").val());
	b > 1 && $(this).parent().find("input").val(b - 1) }), $(document).on("click", ".quantity_wanted_p span.input-group-btn.data-dwn", function(a) {
	var b = parseInt($(this).parent().find("input").val());
	$(this).parent().find("input").val(b + 1) }), $(document).ready(function() { $(window).width() < 767 && ($(".fix-xs-filter").text("Bộ lọc"), $("a.btn.btn-quaylai").text("Quay lại")), $(".entry-month").each(function(a) {
	var b = $(this).text();
	$(this).text(b.replace("Tháng", "")) }), $(window).width() < 768 && $(".swiper-wrapper").owlCarousel({ items: 4, itemsDesktop: [1199, 6], itemsDesktopSmall: [980, 5], itemsTablet: [768, 3], itemsMobile: [360, 4], margin: 10, navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] });
																				var a = $("#owl-prod-t1"),
																					b = $("#owl-prod-t2"),
																					c = $("#owl-prod-t3");
																				$("#owl-prod-t1xxx").owlCarousel({ autoPlay: 3e3, items: 6, itemsDesktop: [1199, 6], itemsDesktopSmall: [980, 5], itemsTablet: [768, 3], itemsMobile: [360, 2], navigation: !1, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a.owlCarousel({ autoPlay: 3e3, items: 4, itemsDesktop: [1199, 4], itemsDesktopSmall: [980, 2], itemsTablet: [768, 2], itemsMobile: [360, 1], navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), b.owlCarousel({ autoPlay: 3e3, items: 4, itemsDesktop: [1199, 3], itemsDesktopSmall: [980, 4], itemsTablet: [768, 2], itemsMobile: [360, 1], navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), c.owlCarousel({ autoPlay: 3e3, items: 4, itemsDesktop: [1199, 4], itemsDesktopSmall: [980, 2], itemsTablet: [768, 2], itemsMobile: [360, 1], navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] });
																				var d = $("#owl-col");
																				d.owlCarousel({ autoPlay: 3e3, stopOnHover: !0, items: 6, itemsDesktop: [1140, 6], itemsDesktopSmall: [980, 3], itemsTablet: [768, 2], itemsMobile: [360, 1] });
																				var e = $("#owl-imgs");
																				e.owlCarousel({ autoPlay: 3e3, stopOnHover: !0, items: 5, itemsDesktop: [1199, 5], itemsDesktopSmall: [980, 5], itemsTablet: [768, 3], itemsMobile: [320, 2] });
																				var f = $("#owl-relate");
																				f.owlCarousel({ autoPlay: 3e3, stopOnHover: !0, items: 4, itemsDesktop: [1199, 3], itemsDesktopSmall: [980, 2], itemsTablet: [768, 2], itemsMobile: [360, 1] }), $(".col-carousel").owlCarousel({ autoPlay: 3e3, stopOnHover: !0, items: 6, itemsDesktop: [1199, 3], itemsDesktopSmall: [980, 3], itemsTablet: [768, 3], itemsMobile: [360, 2] }), $(".product-image-block .images .item-imgs a").click(function() {
																					var a = $(this).attr("href");
																					return $(".product-image-block .featured-image img").attr({ src: a }), !1 }), $(".search-form #search-btn").click(function() { $(".search-form #hidden-search").slideToggle(200), $(this).toggleClass("active") }), $(".search-form #search-btn,.search-form #hidden-search").click(function(a) { a.stopPropagation() }), $(document).click(function() { $(".search-form #hidden-search").hide(), $(".search-form #search-btn").removeClass("active") }) }), jQuery(function(a) { "use strict";
        a(".sidebar-blog-menu").accordion({ accordion: !1, speed: 300, closedSign: "+", openedSign: "-" }), a(".banner-custom").hover(function(b) { a(this).parent().find(".banner-custom").removeClass("active"), a(this).addClass("active") }) }),
	function(a) { a.fn.extend({ accordion: function(b) {
	var c = { accordion: "true", speed: 300, closedSign: "[-]", openedSign: "[+]" },
		d = a.extend(c, b),
		e = a(this);
	e.find("li").each(function() { 0 != a(this).find("ul").size() && (a(this).find("a:first").after("<em>" + d.closedSign + "</em>"), "#" == a(this).find("a:first").attr("href") && a(this).find("a:first").click(function() {
		return !1 })) }), e.find("li em").click(function() { 0 != a(this).parent().find("ul").size() && (d.accordion && (a(this).parent().find("ul").is(":visible") || (parents = a(this).parent().parents("ul"), visible = e.find("ul:visible"), visible.each(function(b) {
		var c = !0;
		parents.each(function(a) {
			if (parents[a] == visible[b]) return c = !1, !1 }), c && a(this).parent().find("ul") != visible[b] && a(visible[b]).slideUp(d.speed, function() { a(this).parent("li").find("em:first").html(d.closedSign) }) }))), a(this).parent().find("ul:first").is(":visible") ? a(this).parent().find("ul:first").slideUp(d.speed, function() { a(this).parent("li").find("em:first").delay(d.speed).html(d.closedSign) }) : a(this).parent().find("ul:first").slideDown(d.speed, function() { a(this).parent("li").find("em:first").delay(d.speed).html(d.openedSign) })) }) } }) }(jQuery);