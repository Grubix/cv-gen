<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController {

    /**
     * @Route("/api/refresh", name="refresh", methods={"POST"})
     */
    public function refresh(Request $request) : JsonResponse {
        $authorizationHeader = $request->headers->get('Authorization');

        if ($authorizationHeader) {
            return new JsonResponse([
                'token' => $authorizationHeader
            ]);
        } else {
            return new JsonResponse();
        }
    }

    /**
     * @Route("/api/login", name="login")
     */
    public function login(Request $request): JsonResponse {
        $response = new JsonResponse();
        $response->headers->setCookie(
            new Cookie(
                'token',
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTYyMzM5MzMsImV4cCI6MTY0Nzc2OTkzMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSJ9.CSDLOebHC6f-kyBHv9W17zRABfwOJyj1B0VR6eJIm5k',
                new \DateTime('+1 day')
            )
        );

        return new JsonResponse([
            'user' => [
                'baseData' => [
                    'firstname' => 'Krystian',
                    'lastname' => 'Borowicz',
                    'birthDate' => '08.12.1998',
                    'phoneNumber' => '696838220',
                    'email' => 'krypi23@gmail.com',
                    'street' => 'Nagietkowa 28',
                    'zipCode' => '62-030 Luboń',
                    'gdpr' => 'Niniejszym wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w dokumentach rekrutacyjnych dla celów naboru (zgodnie z ustawą o ochronie danych osobowych z 29 sierpnia 1997 r., Dz. U. nr 133, poz. 883).',
                    'github' => 'github.com/Grubix'
                ]
            ],
            'token' => 'asdasdadasd',
            'exp' => 60
        ]);
    }

    /**
     * @Route("/api/register", name="register")
     */
    public function register(): Response
    {
        return new Response('');
    }
}
