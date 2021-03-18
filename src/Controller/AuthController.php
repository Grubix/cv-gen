<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController {

    /**
     * @Route("/api/login", name="login")
     */
    public function login(): Response {
        return new Response('');
    }

    /**
     * @Route("/api/register", name="register")
     */
    public function register(): Response {
        return new Response('');
    }

}