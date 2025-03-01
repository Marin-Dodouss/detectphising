export interface Question {
  imageUrl: string;
  context: string;
  isPhishing: boolean;
  explanation: string;
}

export const questions: Question[] = [
  // Questions existantes
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez cet email de votre banque vous demandant de cliquer sur un lien pour vérifier votre compte suite à une tentative de connexion suspecte. L'email contient des fautes d'orthographe et l'adresse d'expédition est 'service-client@bnpparibas-secure.net'.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Les banques n'utilisent pas de domaines avec des suffixes comme '-secure.net'. De plus, les fautes d'orthographe sont un indice courant de tentatives de phishing.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un SMS d'Amazon vous informant qu'un colis est en attente de livraison et vous demandant de cliquer sur un lien pour confirmer votre adresse. Le lien est 'amzn-delivery.info/confirm'.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Amazon utilise uniquement des domaines officiels comme amazon.com ou amazon.fr. Le domaine 'amzn-delivery.info' n'est pas un domaine officiel d'Amazon.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de mise à jour de sécurité de Microsoft pour votre compte Office 365. L'email provient de 'noreply@microsoft.com' et vous demande de vous connecter pour vérifier vos paramètres de sécurité via un bouton 'Se connecter'.",
    isPhishing: false,
    explanation:
      "C'est légitime. L'adresse email est correcte (domaine microsoft.com) et Microsoft envoie régulièrement des notifications de sécurité à ses utilisateurs.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous visitez un site web qui ressemble à Facebook, mais l'URL dans la barre d'adresse est 'faceb00k-login.com'. La page vous demande de vous connecter car votre session a expiré.",
    isPhishing: true,
    explanation:
      "C'est du phishing. L'URL n'est pas le domaine officiel de Facebook (facebook.com). Notez le '00' au lieu de 'oo' dans 'faceb00k', une technique courante pour tromper les utilisateurs.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de PayPal vous informant d'un paiement récent. L'email contient les détails de la transaction et un lien 'Voir les détails de la transaction'. L'adresse d'expédition est 'service@paypal.com' et l'email ne vous demande pas d'informations personnelles.",
    isPhishing: false,
    explanation:
      "C'est légitime. L'email provient d'une adresse officielle de PayPal, contient des informations spécifiques sur la transaction et ne demande pas d'informations sensibles.",
  },

  // 25 nouvelles questions
  {
    imageUrl:
      'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un appel téléphonique d'une personne se présentant comme un technicien Microsoft qui vous informe que votre ordinateur est infecté par un virus. Il vous demande d'installer un logiciel de contrôle à distance pour vous aider.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Microsoft ne contacte jamais les utilisateurs de manière proactive pour des problèmes de virus. Les demandes d'installation de logiciels de contrôle à distance sont des signes classiques d'arnaque.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de Netflix vous informant que votre abonnement va expirer et vous demandant de mettre à jour vos informations de paiement. L'email provient de 'account-update@netflix-service.com'.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Netflix utilise uniquement le domaine netflix.com pour ses communications officielles. Le domaine 'netflix-service.com' est frauduleux.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un SMS de votre opérateur téléphonique vous informant d'un problème de facturation et vous demandant de vous connecter via un lien raccourci bit.ly pour régulariser votre situation.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Les opérateurs téléphoniques n'utilisent pas de liens raccourcis dans leurs communications officielles. De plus, ils vous contacteraient via leur application officielle ou par courrier pour des problèmes de facturation.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de votre banque vous informant d'une mise à jour de sécurité. L'email provient de 'securite@credit-agricole.fr' et vous invite à vous connecter via le site officiel en tapant l'adresse dans votre navigateur (sans fournir de lien).",
    isPhishing: false,
    explanation:
      "C'est légitime. L'email provient d'une adresse officielle de la banque et, surtout, il vous invite à vous connecter en tapant vous-même l'adresse du site plutôt que de cliquer sur un lien, ce qui est une bonne pratique de sécurité.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      'Voous recevez un email vous informant que vous avez gagné à la loterie espagnole et vous demandant de fournir vos coordonnées bancaires pour recevoir votre prix de 750 000 €.',
    isPhishing: true,
    explanation:
      "C'est du phishing. Les loteries légitimes ne contactent pas les gagnants par email, surtout si vous n'avez pas participé. Les demandes d'informations bancaires pour recevoir un prix sont des signes évidents d'arnaque.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1611174743420-3d7df880ce32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de mise à jour des conditions d'utilisation de Spotify. L'email provient de 'no-reply@spotify.com' et contient un résumé des changements avec un lien vers la version complète sur le site officiel.",
    isPhishing: false,
    explanation:
      "C'est légitime. L'email provient d'une adresse officielle de Spotify et les mises à jour des conditions d'utilisation sont des communications standard. Le contenu est informatif sans demande d'action urgente.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de l'administration fiscale vous informant d'un remboursement d'impôt et vous demandant de cliquer sur un lien pour confirmer vos coordonnées bancaires. L'email contient des fautes d'orthographe et l'adresse d'expédition est 'service-impots@gouv-france.org'.",
    isPhishing: true,
    explanation:
      "C'est du phishing. L'administration fiscale française utilise le domaine 'gouv.fr' et non 'gouv-france.org'. De plus, les fautes d'orthographe sont un indice de tentative de phishing.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de Google vous informant d'une tentative de connexion suspecte à votre compte Gmail depuis un nouvel appareil. L'email vous propose de vérifier cette activité en vous connectant à votre compte ou de signaler si ce n'était pas vous.",
    isPhishing: false,
    explanation:
      "C'est légitime. Google envoie effectivement des alertes de sécurité lorsqu'une connexion est détectée depuis un nouvel appareil. L'email ne vous demande pas d'informations sensibles et vous propose des options claires.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un message WhatsApp d'un numéro inconnu se présentant comme un ami qui a changé de numéro et qui vous demande de lui envoyer un code à 6 chiffres qu'il vient de vous faire parvenir par SMS.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Cette technique est utilisée pour intercepter les codes de vérification à deux facteurs. En envoyant ce code, vous permettriez à l'escroc de prendre le contrôle de votre compte WhatsApp.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email d'Apple vous informant d'un achat récent sur l'App Store. Voous ne reconnaissez pas cet achat. L'email vous propose soit de confirmer la transaction, soit de signaler un problème via le site officiel d'Apple.",
    isPhishing: false,
    explanation:
      "C'est légitime. Apple envoie des confirmations d'achat et propose des options pour signaler les transactions non reconnues. L'email ne vous demande pas d'informations sensibles et vous dirige vers le site officiel.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      'Voous recevez un SMS vous informant que votre colis est bloqué en douane et vous demandant de payer des frais de 2,99€ via un lien pour le débloquer.',
    isPhishing: true,
    explanation:
      "C'est du phishing. Les services postaux et de livraison ne demandent jamais de paiements par SMS pour des frais de douane. Ces frais sont généralement collectés par le livreur ou via une notification officielle.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de LinkedIn vous informant que quelqu'un a consulté votre profil. L'email contient un aperçu de la personne et un bouton pour voir tous les détails en vous connectant à votre compte.",
    isPhishing: false,
    explanation:
      "C'est légitime. LinkedIn envoie régulièrement des notifications concernant l'activité de votre profil. L'email ne demande pas d'informations sensibles et vous dirige vers le site officiel pour vous connecter.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un appel d'une personne se présentant comme un conseiller de votre banque qui vous informe d'une transaction suspecte et vous demande de confirmer votre numéro de carte bancaire et le code CVV pour bloquer la transaction.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Une banque ne demandera jamais votre code CVV par téléphone. Les conseillers bancaires légitimes peuvent vous demander de confirmer certaines informations pour vous identifier, mais jamais vos codes secrets.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de Doctolib confirmant un rendez-vous médical que vous avez pris. L'email contient les détails du rendez-vous, le nom du médecin et un bouton pour modifier ou annuler le rendez-vous.",
    isPhishing: false,
    explanation:
      "C'est légitime. Doctolib envoie des confirmations de rendez-vous par email avec les informations pertinentes. L'email ne demande pas d'informations sensibles et propose des options standard de gestion de rendez-vous.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email vous informant que votre compte Netflix a été suspendu en raison d'un problème de paiement. L'email vous demande de mettre à jour vos informations de paiement en cliquant sur un lien 'Mettre à jour mon compte'.",
    isPhishing: true,
    explanation:
      "C'est probablement du phishing. Bien que Netflix puisse envoyer des notifications concernant des problèmes de paiement, il est préférable d'accéder directement au site en tapant l'URL plutôt que de cliquer sur un lien dans un email. Vérifiez toujours l'adresse d'expédition.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un SMS de votre banque vous informant d'une tentative de transaction inhabituelle et vous demandant de confirmer si c'est bien vous en répondant OUI ou NON au message.",
    isPhishing: false,
    explanation:
      "C'est probablement légitime. Les banques envoient souvent des alertes par SMS pour des transactions inhabituelles et demandent une confirmation simple par OUI ou NON. Notez qu'elles ne demandent pas d'informations sensibles ou de cliquer sur un lien.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email vous informant que vous avez été sélectionné pour participer à une étude rémunérée. L'email vous demande de cliquer sur un lien pour remplir un questionnaire et recevoir 50€ en carte cadeau.",
    isPhishing: true,
    explanation:
      "C'est probablement du phishing. Les offres de rémunération facile pour des sondages sont souvent des tentatives de phishing visant à collecter vos informations personnelles ou à vous faire installer des logiciels malveillants.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de Twitter/X vous informant que votre mot de passe a été modifié. Si vous n'avez pas effectué ce changement, l'email vous propose de cliquer sur un lien pour sécuriser votre compte.",
    isPhishing: true,
    explanation:
      "C'est probablement du phishing. Bien que les plateformes envoient des notifications de changement de mot de passe, il est préférable d'accéder directement au site en tapant l'URL plutôt que de cliquer sur un lien dans un email, surtout si vous n'avez pas initié ce changement.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de confirmation d'achat d'Amazon pour une commande que vous avez passée. L'email liste les articles achetés, le montant total et le numéro de commande, avec un lien pour suivre votre colis.",
    isPhishing: false,
    explanation:
      "C'est légitime. Amazon envoie des confirmations de commande contenant les détails de votre achat. Si vous reconnaissez la commande, c'est probablement un email authentique.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un message sur LinkedIn d'un recruteur qui vous propose un poste à pourvoir et vous demande d'envoyer votre CV à une adresse email externe plutôt que de communiquer via la plateforme.",
    isPhishing: true,
    explanation:
      "C'est suspect et potentiellement du phishing. Les recruteurs légitimes communiquent généralement via la plateforme LinkedIn. La demande de déplacer la conversation vers un email externe est souvent un signe d'arnaque, surtout en début de contact.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de YouTube vous informant qu'une vidéo que vous avez signalée a été examinée et retirée pour violation des conditions d'utilisation. L'email contient un lien vers la politique de la communauté.",
    isPhishing: false,
    explanation:
      "C'est légitime. YouTube envoie des notifications concernant les signalements de contenu. L'email est informatif et ne vous demande pas d'action urgente ou d'informations sensibles.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un SMS vous informant que votre compte bancaire a été temporairement bloqué en raison d'une activité suspecte et vous demandant d'appeler un numéro commençant par 08 pour débloquer votre compte.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Les banques n'informent généralement pas leurs clients de problèmes de sécurité par SMS avec un numéro à appeler. Elles vous demanderaient de vous connecter à votre espace client ou d'appeler le numéro officiel figurant au dos de votre carte bancaire.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de Vinted confirmant la vente d'un article que vous avez mis en ligne. L'email contient les détails de la transaction et les instructions pour l'expédition.",
    isPhishing: false,
    explanation:
      "C'est légitime. Vinted envoie des confirmations de vente avec les informations nécessaires pour l'expédition. Si vous avez effectivement mis un article en vente, cet email est probablement authentique.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email vous informant que vous avez été victime d'une fuite de données et que vos photos intimes vont être publiées si vous ne payez pas 500€ en Bitcoin dans les 48 heures.",
    isPhishing: true,
    explanation:
      "C'est du phishing. Il s'agit d'une tentative d'extorsion classique. Ces emails sont envoyés en masse et ne contiennent généralement aucune preuve réelle. Ne répondez jamais à ce type de menace et ne payez jamais.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de Facebook vous informant que quelqu'un a tenté de se connecter à votre compte depuis un nouvel appareil. L'email vous propose de vérifier cette activité ou de signaler si ce n'était pas vous.",
    isPhishing: false,
    explanation:
      "C'est légitime. Facebook envoie des alertes de sécurité lorsqu'une connexion est détectée depuis un nouvel appareil. L'email ne vous demande pas d'informations sensibles et vous propose des options claires.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email d'un prince nigérian qui a besoin de votre aide pour transférer une importante somme d'argent. Il vous promet 30% de la somme si vous l'aidez en fournissant vos coordonnées bancaires.",
    isPhishing: true,
    explanation:
      "C'est du phishing. L'arnaque du 'prince nigérian' est l'une des plus anciennes et des plus connues sur internet. Personne ne vous offrira des millions d'euros en échange de votre aide pour un transfert d'argent.",
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    context:
      "Voous recevez un email de votre fournisseur d'accès internet vous informant d'une maintenance planifiée qui pourrait affecter votre connexion. L'email ne contient aucun lien et vous informe simplement de la date et de l'heure de l'intervention.",
    isPhishing: false,
    explanation:
      "C'est légitime. Les fournisseurs d'accès internet envoient des notifications concernant les maintenances planifiées. L'email est purement informatif et ne vous demande aucune action ou information.",
  },
];
