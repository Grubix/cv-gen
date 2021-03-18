<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController {

    /**
     * @Route("/{reactRouting}", name="index", requirements={"reactRouting"="(?!api).+"}, defaults={"reactRouting": null})
     */
    public function index(): Response {
        // https://stackoverflow.com/questions/49050757/symfony-4-how-to-setup-spa-single-page-app-with-react
        return $this->render('base.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
    
}