<?php
// Connection Component Binding
Doctrine_Manager::getInstance()->bindComponent('AdCategory', 'doctrine');

/**
 * BaseAdCategory
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property string $name
 * @property clob $description
 * @property string $image_path
 * @property boolean $is_active
 * @property string $lang
 * @property integer $parent_id
 * @property string $slug
 * @property string $link
 * @property integer $level
 * @property integer $priority
 * @property boolean $is_category
 * @property boolean $is_hot
 * @property AdCategory $AdParentCategory
 * @property AdCategoryPermission $AdCatPermission
 * @property Doctrine_Collection $ParentCategory
 * @property Doctrine_Collection $ArticleCategory
 * 
 * @method string               getName()             Returns the current record's "name" value
 * @method clob                 getDescription()      Returns the current record's "description" value
 * @method string               getImagePath()        Returns the current record's "image_path" value
 * @method boolean              getIsActive()         Returns the current record's "is_active" value
 * @method string               getLang()             Returns the current record's "lang" value
 * @method integer              getParentId()         Returns the current record's "parent_id" value
 * @method string               getSlug()             Returns the current record's "slug" value
 * @method string               getLink()             Returns the current record's "link" value
 * @method integer              getLevel()            Returns the current record's "level" value
 * @method integer              getPriority()         Returns the current record's "priority" value
 * @method boolean              getIsCategory()       Returns the current record's "is_category" value
 * @method boolean              getIsHot()            Returns the current record's "is_hot" value
 * @method AdCategory           getAdParentCategory() Returns the current record's "AdParentCategory" value
 * @method AdCategoryPermission getAdCatPermission()  Returns the current record's "AdCatPermission" value
 * @method Doctrine_Collection  getParentCategory()   Returns the current record's "ParentCategory" collection
 * @method Doctrine_Collection  getArticleCategory()  Returns the current record's "ArticleCategory" collection
 * @method AdCategory           setName()             Sets the current record's "name" value
 * @method AdCategory           setDescription()      Sets the current record's "description" value
 * @method AdCategory           setImagePath()        Sets the current record's "image_path" value
 * @method AdCategory           setIsActive()         Sets the current record's "is_active" value
 * @method AdCategory           setLang()             Sets the current record's "lang" value
 * @method AdCategory           setParentId()         Sets the current record's "parent_id" value
 * @method AdCategory           setSlug()             Sets the current record's "slug" value
 * @method AdCategory           setLink()             Sets the current record's "link" value
 * @method AdCategory           setLevel()            Sets the current record's "level" value
 * @method AdCategory           setPriority()         Sets the current record's "priority" value
 * @method AdCategory           setIsCategory()       Sets the current record's "is_category" value
 * @method AdCategory           setIsHot()            Sets the current record's "is_hot" value
 * @method AdCategory           setAdParentCategory() Sets the current record's "AdParentCategory" value
 * @method AdCategory           setAdCatPermission()  Sets the current record's "AdCatPermission" value
 * @method AdCategory           setParentCategory()   Sets the current record's "ParentCategory" collection
 * @method AdCategory           setArticleCategory()  Sets the current record's "ArticleCategory" collection
 * 
 * @package    symfony
 * @subpackage model
 * @author     Your name here
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class BaseAdCategory extends sfDoctrineRecord
{
    public function setTableDefinition()
    {
        $this->setTableName('ad_category');
        $this->hasColumn('name', 'string', 255, array(
             'type' => 'string',
             'notnull' => true,
             'comment' => 'Tên chuyên mục',
             'length' => 255,
             ));
        $this->hasColumn('description', 'clob', null, array(
             'type' => 'clob',
             'comment' => 'Mô tả chuyên mục',
             ));
        $this->hasColumn('image_path', 'string', 255, array(
             'type' => 'string',
             'comment' => 'File ảnh đại diện chuyên mục',
             'length' => 255,
             ));
        $this->hasColumn('is_active', 'boolean', null, array(
             'type' => 'boolean',
             'notnull' => true,
             'default' => false,
             'comment' => 'Trạng thái hiển thị (0: ko hiển thị, 1: hiển thị)',
             ));
        $this->hasColumn('lang', 'string', 10, array(
             'type' => 'string',
             'comment' => 'Đa ngôn ngữ',
             'length' => 10,
             ));
        $this->hasColumn('parent_id', 'integer', 5, array(
             'type' => 'integer',
             'comment' => 'Danh mục cha',
             'length' => 5,
             ));
        $this->hasColumn('slug', 'string', 255, array(
             'type' => 'string',
             'unique' => true,
             'notnull' => true,
             'comment' => 'chuyển đổi url',
             'length' => 255,
             ));
        $this->hasColumn('link', 'string', 255, array(
             'type' => 'string',
             'comment' => 'Đường dẫn của chuyên mục (nếu có)',
             'length' => 255,
             ));
        $this->hasColumn('level', 'integer', null, array(
             'type' => 'integer',
             'default' => 0,
             'comment' => 'phân cấp chuyên mục',
             ));
        $this->hasColumn('priority', 'integer', 5, array(
             'type' => 'integer',
             'notnull' => true,
             'comment' => 'Độ ưu tiên hiển thị',
             'length' => 5,
             ));
        $this->hasColumn('is_category', 'boolean', null, array(
             'type' => 'boolean',
             'notnull' => true,
             'default' => false,
             'comment' => 'có xem bài chi tiết hay không',
             ));
        $this->hasColumn('is_hot', 'boolean', null, array(
             'type' => 'boolean',
             'notnull' => true,
             'default' => false,
             'comment' => 'Hiển thị cột phải (0: không hiển thị, 1: hiển thị)',
             ));
    }

    public function setUp()
    {
        parent::setUp();
        $this->hasOne('AdCategory as AdParentCategory', array(
             'local' => 'parent_id',
             'foreign' => 'id'));

        $this->hasOne('AdCategoryPermission as AdCatPermission', array(
             'local' => 'category_id',
             'foreign' => 'id'));

        $this->hasMany('AdCategory as ParentCategory', array(
             'local' => 'id',
             'foreign' => 'parent_id'));

        $this->hasMany('AdArticle as ArticleCategory', array(
             'local' => 'id',
             'foreign' => 'category_id'));

        $vtblameable0 = new Doctrine_Template_VtBlameable();
        $timestampable0 = new Doctrine_Template_Timestampable();
        $this->actAs($vtblameable0);
        $this->actAs($timestampable0);
    }
}