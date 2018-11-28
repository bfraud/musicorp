<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller as BaseController;
use Symfony\Component\Routing\Annotation\Route;

class Controller extends BaseController
{
    /**
     * @Route(path="/", name="main")
     * @Template(template="main.html.twig")
     *
     * @return array
     */
    public function main(): array
    {
        return [
            'store' => [],
            'props'=> [],
        ];
    }
}