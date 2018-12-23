<?php
// Connection Component Binding
Doctrine_Manager::getInstance()->bindComponent('VtpProducts', 'doctrine');

/**
 * BaseVtpProducts
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property string $product_name
 * @property string $product_code
 * @property integer $category_id
 * @property integer $price
 * @property integer $price_promotion
 * @property string $image_path
 * @property string $link
 * @property integer $priority
 * @property string $description
 * @property clob $content
 * @property clob $comment
 * @property clob $warranty_information
 * @property string $manufacturer
 * @property string $do_day
 * @property string $trong_luong
 * @property string $duong_kinh_trong
 * @property string $duong_kinh_ngoai
 * @property string $chung_loai
 * @property string $accessories
 * @property boolean $is_active
 * @property boolean $is_home
 * @property boolean $is_hot
 * @property string $slug
 * @property integer $portal_id
 * @property string $lang
 * @property string $meta
 * @property string $keywords
 * @property VtpProductsCategory $VtpProducts
 * @property Doctrine_Collection $ProductImage
 * 
 * @method string              getProductName()          Returns the current record's "product_name" value
 * @method string              getProductCode()          Returns the current record's "product_code" value
 * @method integer             getCategoryId()           Returns the current record's "category_id" value
 * @method integer             getPrice()                Returns the current record's "price" value
 * @method integer             getPricePromotion()       Returns the current record's "price_promotion" value
 * @method string              getImagePath()            Returns the current record's "image_path" value
 * @method string              getLink()                 Returns the current record's "link" value
 * @method integer             getPriority()             Returns the current record's "priority" value
 * @method string              getDescription()          Returns the current record's "description" value
 * @method clob                getContent()              Returns the current record's "content" value
 * @method clob                getComment()              Returns the current record's "comment" value
 * @method clob                getWarrantyInformation()  Returns the current record's "warranty_information" value
 * @method string              getManufacturer()         Returns the current record's "manufacturer" value
 * @method string              getDoDay()                Returns the current record's "do_day" value
 * @method string              getTrongLuong()           Returns the current record's "trong_luong" value
 * @method string              getDuongKinhTrong()       Returns the current record's "duong_kinh_trong" value
 * @method string              getDuongKinhNgoai()       Returns the current record's "duong_kinh_ngoai" value
 * @method string              getChungLoai()            Returns the current record's "chung_loai" value
 * @method string              getAccessories()          Returns the current record's "accessories" value
 * @method boolean             getIsActive()             Returns the current record's "is_active" value
 * @method boolean             getIsHome()               Returns the current record's "is_home" value
 * @method boolean             getIsHot()                Returns the current record's "is_hot" value
 * @method string              getSlug()                 Returns the current record's "slug" value
 * @method integer             getPortalId()             Returns the current record's "portal_id" value
 * @method string              getLang()                 Returns the current record's "lang" value
 * @method string              getMeta()                 Returns the current record's "meta" value
 * @method string              getKeywords()             Returns the current record's "keywords" value
 * @method VtpProductsCategory getVtpProducts()          Returns the current record's "VtpProducts" value
 * @method Doctrine_Collection getProductImage()         Returns the current record's "ProductImage" collection
 * @method VtpProducts         setProductName()          Sets the current record's "product_name" value
 * @method VtpProducts         setProductCode()          Sets the current record's "product_code" value
 * @method VtpProducts         setCategoryId()           Sets the current record's "category_id" value
 * @method VtpProducts         setPrice()                Sets the current record's "price" value
 * @method VtpProducts         setPricePromotion()       Sets the current record's "price_promotion" value
 * @method VtpProducts         setImagePath()            Sets the current record's "image_path" value
 * @method VtpProducts         setLink()                 Sets the current record's "link" value
 * @method VtpProducts         setPriority()             Sets the current record's "priority" value
 * @method VtpProducts         setDescription()          Sets the current record's "description" value
 * @method VtpProducts         setContent()              Sets the current record's "content" value
 * @method VtpProducts         setComment()              Sets the current record's "comment" value
 * @method VtpProducts         setWarrantyInformation()  Sets the current record's "warranty_information" value
 * @method VtpProducts         setManufacturer()         Sets the current record's "manufacturer" value
 * @method VtpProducts         setDoDay()                Sets the current record's "do_day" value
 * @method VtpProducts         setTrongLuong()           Sets the current record's "trong_luong" value
 * @method VtpProducts         setDuongKinhTrong()       Sets the current record's "duong_kinh_trong" value
 * @method VtpProducts         setDuongKinhNgoai()       Sets the current record's "duong_kinh_ngoai" value
 * @method VtpProducts         setChungLoai()            Sets the current record's "chung_loai" value
 * @method VtpProducts         setAccessories()          Sets the current record's "accessories" value
 * @method VtpProducts         setIsActive()             Sets the current record's "is_active" value
 * @method VtpProducts         setIsHome()               Sets the current record's "is_home" value
 * @method VtpProducts         setIsHot()                Sets the current record's "is_hot" value
 * @method VtpProducts         setSlug()                 Sets the current record's "slug" value
 * @method VtpProducts         setPortalId()             Sets the current record's "portal_id" value
 * @method VtpProducts         setLang()                 Sets the current record's "lang" value
 * @method VtpProducts         setMeta()                 Sets the current record's "meta" value
 * @method VtpProducts         setKeywords()             Sets the current record's "keywords" value
 * @method VtpProducts         setVtpProducts()          Sets the current record's "VtpProducts" value
 * @method VtpProducts         setProductImage()         Sets the current record's "ProductImage" collection
 * 
 * @package    symfony
 * @subpackage model
 * @author     Your name here
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class BaseVtpProducts extends sfDoctrineRecord
{
    public function setTableDefinition()
    {
        $this->setTableName('vtp_products');
        $this->hasColumn('product_name', 'string', 255, array(
             'type' => 'string',
             'notnull' => true,
             'unique' => true,
             'comment' => 'Tên sản phẩm',
             'length' => 255,
             ));
        $this->hasColumn('product_code', 'string', 100, array(
             'type' => 'string',
             'notnull' => true,
             'unique' => true,
             'comment' => 'Mã sản phẩm',
             'length' => 100,
             ));
        $this->hasColumn('category_id', 'integer', null, array(
             'type' => 'integer',
             'comment' => 'Chuyên mục sản phẩm',
             ));
        $this->hasColumn('price', 'integer', 8, array(
             'type' => 'integer',
             'comment' => 'Giá sản phẩm',
             'length' => 8,
             ));
        $this->hasColumn('price_promotion', 'integer', 8, array(
             'type' => 'integer',
             'comment' => 'Giá sản phẩm',
             'length' => 8,
             ));
        $this->hasColumn('image_path', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Đường dẫn file ảnh đại diện',
             'length' => 255,
             ));
        $this->hasColumn('link', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Đường dẫn chi tiết trên viettel shop',
             'length' => 255,
             ));
        $this->hasColumn('priority', 'integer', 8, array(
             'type' => 'integer',
             'default' => 0,
             'comment' => 'Thứ tự hiển thị',
             'length' => 8,
             ));
        $this->hasColumn('description', 'string', 512, array(
             'type' => 'string',
             'comment' => 'Mô tả về sản phẩm',
             'length' => 512,
             ));
        $this->hasColumn('content', 'clob', null, array(
             'type' => 'clob',
             'comment' => 'Nội dung bài viết',
             ));
        $this->hasColumn('comment', 'clob', null, array(
             'type' => 'clob',
             'comment' => 'Nội dung đánh giá sản phẩm bài viết',
             ));
        $this->hasColumn('warranty_information', 'clob', null, array(
             'type' => 'clob',
             'comment' => 'Thông tin bảo hành',
             ));
        $this->hasColumn('manufacturer', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Nước sản xuất',
             'length' => 255,
             ));
        $this->hasColumn('do_day', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Độ dày',
             'length' => 255,
             ));
        $this->hasColumn('trong_luong', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Trọng lượng',
             'length' => 255,
             ));
        $this->hasColumn('duong_kinh_trong', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Đường kính trong',
             'length' => 255,
             ));
        $this->hasColumn('duong_kinh_ngoai', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Đường kính ngoài',
             'length' => 255,
             ));
        $this->hasColumn('chung_loai', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Chủng loại',
             'length' => 255,
             ));
        $this->hasColumn('accessories', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Phụ kiện',
             'length' => 255,
             ));
        $this->hasColumn('is_active', 'boolean', null, array(
             'type' => 'boolean',
             'notnull' => true,
             'default' => false,
             'comment' => 'Trạng thái 0=chưa sử dụng, 1= sử dụng',
             ));
        $this->hasColumn('is_home', 'boolean', null, array(
             'type' => 'boolean',
             'notnull' => true,
             'default' => false,
             'comment' => 'Trạng thái 0=không hiển thị trang chủ, 1= Hiển thị trang chủ',
             ));
        $this->hasColumn('is_hot', 'boolean', null, array(
             'type' => 'boolean',
             'notnull' => true,
             'default' => false,
             'comment' => 'Trạng thái 0=không hiển thị trang chủ, 1= Hiển thị trang chủ',
             ));
        $this->hasColumn('slug', 'string', 255, array(
             'type' => 'string',
             'unique' => true,
             'notnull' => true,
             'comment' => 'chuyển đổi url',
             'length' => 255,
             ));
        $this->hasColumn('portal_id', 'integer', null, array(
             'type' => 'integer',
             'comment' => 'Portal cần hiển thị nội dung, được quy ước trong file cấu hình (Khách hàng cá nhân / Khách hàng doanh nghiệp)',
             ));
        $this->hasColumn('lang', 'string', 10, array(
             'type' => 'string',
             'notnull' => true,
             'comment' => 'Đa ngôn ngữ',
             'length' => 10,
             ));
        $this->hasColumn('meta', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Nội dung meta',
             'length' => 255,
             ));
        $this->hasColumn('keywords', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Nội dung keywords',
             'length' => 255,
             ));
    }

    public function setUp()
    {
        parent::setUp();
        $this->hasOne('VtpProductsCategory as VtpProducts', array(
             'local' => 'category_id',
             'foreign' => 'id'));

        $this->hasMany('VtpProductImage as ProductImage', array(
             'local' => 'id',
             'foreign' => 'product_id'));

        $vtblameable0 = new Doctrine_Template_VtBlameable();
        $timestampable0 = new Doctrine_Template_Timestampable();
        $this->actAs($vtblameable0);
        $this->actAs($timestampable0);
    }
}