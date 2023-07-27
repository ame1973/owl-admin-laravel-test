<?php

namespace App\Admin\Controllers;

use Slowlyo\OwlAdmin\Renderers\Page;
use Slowlyo\OwlAdmin\Renderers\Form;
use Slowlyo\OwlAdmin\Controllers\AdminController;
use App\Services\IdolService;

/**
 * Idol
 *
 * @property IdolService $service
 */
class IdolController extends AdminController
{
    protected string $serviceName = IdolService::class;

    public function list(): Page
    {
        $crud = $this->baseCRUD()
            ->filterTogglable(false)
			->headerToolbar([
				$this->createButton(true),
				...$this->baseHeaderToolBar()
			])
            ->columns([
                amisMake()->TableColumn('id', 'ID')->sortable(),
				amisMake()->TableColumn('name', 'Name'),
				amisMake()->TableColumn('team', 'Team'),
				amisMake()->TableColumn('payload', 'Payload'),
				amisMake()->TableColumn('token_id', 'TokenId'),
				amisMake()->TableColumn('created_at', __('admin.created_at'))->type('datetime')->sortable(true),
				amisMake()->TableColumn('updated_at', __('admin.updated_at'))->type('datetime')->sortable(true),
                $this->rowActions(true)
            ]);

        return $this->baseList($crud);
    }

    public function form($isEdit = false): Form
    {
        return $this->baseForm()->body([
            amisMake()->TextControl('name', 'Name')->required(),
			amisMake()->TextControl('team', 'Team'),
			amisMake()->InputKVS()->label('Payload')->name('payload'),
			amisMake()->TextControl('token_id', 'TokenId')->validations('isNumeric'),
        ]);
    }

    public function detail(): Form
    {
        return $this->baseDetail()->body([
            amisMake()->TextControl('id', 'ID')->static(),
			amisMake()->TextControl('name', 'Name')->static(),
			amisMake()->TextControl('team', 'Team')->static(),
			amisMake()->TextControl('payload', 'Payload')->static()->jsonSerialize(),
			amisMake()->TextControl('token_id', 'TokenId')->static(),
			amisMake()->TextControl('created_at', __('admin.created_at'))->static(),
			amisMake()->TextControl('updated_at', __('admin.updated_at'))->static()
        ]);
    }
}
