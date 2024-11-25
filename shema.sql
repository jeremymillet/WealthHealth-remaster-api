CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL
);

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `wealth_health`
--

-- --------------------------------------------------------

--
-- Structure de la table `departments`
--

CREATE TABLE `departments` (
  `id` int(2) NOT NULL,
  `value` varchar(32) NOT NULL,
  `label` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `departments`
--

INSERT INTO `departments` (`id`, `value`, `label`) VALUES
(1, 'Sales', 'Sales'),
(2, 'Marketing', 'Marketing'),
(3, 'Engineering', 'Engineering'),
(4, 'Human Resources', 'Human Resources'),
(5, 'Legal', 'Legal');

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

CREATE TABLE `employees` (
  `id` int(2) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `start_date` datetime NOT NULL,
  `street` varchar(32) NOT NULL,
  `city` varchar(32) NOT NULL,
  `state_id` int(11) NOT NULL,
  `zip_code` int(5) NOT NULL,
  `department_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `date_of_birth`, `start_date`, `street`, `city`, `state_id`, `zip_code`, `department_id`) VALUES
(9, 'Jeremy', 'Millet', '2002-07-15 00:00:00', '2024-10-16 00:00:00', '81 avenue de la république', 'tours', 2, 37100, 3);

-- --------------------------------------------------------

--
-- Structure de la table `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `value` varchar(32) NOT NULL,
  `label` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `states`
--

INSERT INTO `states` (`id`, `value`, `label`) VALUES
(1, 'Alabama', 'Alabama'),
(2, 'Alaska', 'Alaska'),
(3, 'American Samoa', 'American Samoa'),
(4, 'Arizona', 'Arizona'),
(5, 'Arkansas', 'Arkansas'),
(6, 'California', 'California'),
(7, 'Colorado', 'Colorado'),
(8, 'Connecticut', 'Connecticut'),
(9, 'Delaware', 'Delaware'),
(10, 'District Of Columbia', 'District Of Columbia'),
(11, 'Federated States Of Micronesia', 'Federated States Of Micronesia'),
(12, 'Florida', 'Florida'),
(13, 'Georgia', 'Georgia'),
(14, 'Guam', 'Guam'),
(15, 'Hawaii', 'Hawaii'),
(16, 'Idaho', 'Idaho'),
(17, 'Illinois', 'Illinois'),
(18, 'Indiana', 'Indiana'),
(19, 'Iowa', 'Iowa'),
(20, 'Kansas', 'Kansas'),
(21, 'Kentucky', 'Kentucky'),
(22, 'Louisiana', 'Louisiana'),
(23, 'Maine', 'Maine'),
(24, 'Marshall Islands', 'Marshall Islands'),
(25, 'Maryland', 'Maryland'),
(26, 'Massachusetts', 'Massachusetts'),
(27, 'Michigan', 'Michigan'),
(28, 'Minnesota', 'Minnesota'),
(29, 'Mississippi', 'Mississippi'),
(30, 'Missouri', 'Missouri'),
(31, 'Montana', 'Montana'),
(32, 'Nebraska', 'Nebraska'),
(33, 'Nevada', 'Nevada'),
(34, 'New Hampshire', 'New Hampshire'),
(35, 'New Jersey', 'New Jersey'),
(36, 'New Mexico', 'New Mexico'),
(37, 'New York', 'New York'),
(38, 'North Carolina', 'North Carolina'),
(39, 'North Dakota', 'North Dakota'),
(40, 'Northern Mariana Islands', 'Northern Mariana Islands'),
(41, 'Ohio', 'Ohio'),
(42, 'Oklahoma', 'Oklahoma'),
(43, 'Oregon', 'Oregon'),
(44, 'Palau', 'Palau'),
(45, 'Pennsylvania', 'Pennsylvania'),
(46, 'Puerto Rico', 'Puerto Rico'),
(47, 'Rhode Island', 'Rhode Island'),
(48, 'South Carolina', 'South Carolina'),
(49, 'South Dakota', 'South Dakota'),
(50, 'Tennessee', 'Tennessee'),
(51, 'Texas', 'Texas'),
(52, 'Utah', 'Utah'),
(53, 'Vermont', 'Vermont'),
(54, 'Virgin Islands', 'Virgin Islands'),
(55, 'Virginia', 'Virginia'),
(56, 'Washington', 'Washington'),
(57, 'West Virginia', 'West Virginia'),
(58, 'Wisconsin', 'Wisconsin'),
(59, 'Wyoming', 'Wyoming');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_id` int(2) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(256) NOT NULL,
  `refresh_token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `refresh_token`) VALUES
(4, 'jeremy37.millet@gmail.com', '$2b$12$0VyrrSckI3ZNhtyyNqnmV.UAEePTpMCFtS413xxHT0ojXmS9bsxQ6', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `departments`
--
ALTER TABLE `departments`
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `employees`
--
ALTER TABLE `employees`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `state_id` (`state_id`),
  ADD KEY `department_id` (`department_id`);

--
-- Index pour la table `states`
--
ALTER TABLE `states`
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `department_id` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  ADD CONSTRAINT `state_id` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;