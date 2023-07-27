<?php

namespace App\Admin\Controllers;

use Slowlyo\OwlAdmin\Renderers\Page;
use Slowlyo\OwlAdmin\Renderers\Form;
use Slowlyo\OwlAdmin\Controllers\AdminController;
use App\Services\UserService;

/**
 * User
 *
 * @property UserService $service
 */
class UserController extends AdminController
{
    protected string $serviceName = UserService::class;

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
				amisMake()->TableColumn('email', 'Email'),
				amisMake()->TableColumn('email_verified_at', 'EmailVerifiedAt'),
				amisMake()->TableColumn('password', 'Password'),
				amisMake()->TableColumn('remember_token', 'RememberToken'),
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
			amisMake()->TextControl('email', 'Email'),
			amisMake()->TextControl('email_verified_at', 'EmailVerifiedAt'),
			amisMake()->TextControl('password', 'Password'),
			amisMake()->TextControl('remember_token', 'RememberToken'),
        ]);
    }

    public function detail(): Form
    {
        return $this->baseDetail()->body([
            amisMake()->TextControl('id', 'ID')->static(),
			amisMake()->TextControl('name', 'Name')->static(),
			amisMake()->TextControl('email', 'Email')->static(),
			amisMake()->TextControl('email_verified_at', 'EmailVerifiedAt')->static(),
			amisMake()->TextControl('password', 'Password')->static(),
			amisMake()->TextControl('remember_token', 'RememberToken')->static(),
			amisMake()->TextControl('created_at', __('admin.created_at'))->static(),
			amisMake()->TextControl('updated_at', __('admin.updated_at'))->static()
        ]);
    }
}
