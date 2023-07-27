<?php

namespace App\Services;

use App\Models\Idol;
use Slowlyo\OwlAdmin\Services\AdminService;

/**
 * Idol
 *
 * @method Idol getModel()
 * @method Idol|\Illuminate\Database\Query\Builder query()
 */
class IdolService extends AdminService
{
    protected string $modelName = Idol::class;
}
