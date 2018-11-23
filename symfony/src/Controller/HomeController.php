<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends Controller
{
    /**
     * @Route(path="/", name="home_page")
     */
    public function homePage()
    {
        return $this->render('home_page.html.twig');
    }
}