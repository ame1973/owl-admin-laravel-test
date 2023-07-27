<?php

namespace App\Admin\Controllers;

use Illuminate\Http\Request;
use Slowlyo\OwlAdmin\Renderers\Tab;
use Slowlyo\OwlAdmin\Renderers\Tabs;
use Slowlyo\OwlAdmin\Renderers\Alert;
use Slowlyo\OwlAdmin\Renderers\InputKV;
use Slowlyo\OwlAdmin\Renderers\TextControl;
use Slowlyo\OwlAdmin\Controllers\AdminController;

class SettingController extends AdminController
{
    public function index()
    {
        $page = $this->basePage()->body([
            Alert::make()->showIcon(true)->body("此处内容仅供演示, 设置项无实际意义，实际开发中请根据实际情况进行修改。"),
            $this->form(),
        ]);

        return $this->response()->success($page);
    }

    public function form()
    {
        return $this->baseForm()
            ->redirect('')
            ->api($this->getStorePath())
            ->data(settings()->all())
            ->body(
                Tabs::make()->tabs([
                    Tab::make()->title('基本设置')->body([
                        TextControl::make()->label('网站名称')->name('site_name'),
                        InputKV::make()->label('附加配置')->name('addition_config'),
                    ]),
                    Tab::make()->title('上传设置')->body([
                        TextControl::make()->label('上传域名')->name('upload_domain'),
                        TextControl::make()->label('上传路径')->name('upload_path'),
                    ]),
                ])
            );
    }

    public function store(Request $request)
    {
        $data = $request->only([
            'site_name',
            'addition_config',
            'upload_domain',
            'upload_path',
        ]);

        return settings()->adminSetMany($data);
    }
}
