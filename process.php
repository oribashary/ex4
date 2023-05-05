<?php
const PRICES = [
	'ThePunisher' => 50,
	'TheMemeMachine' => 75,
	'TheBaconator' => 100,
];

const CITIES = [
	'HogwartsSchoolofWitchcraftandWizardry',
	'CentralPerk',
	'JurassicPark',
	'TheBatcave',
	'Springfield',
];

$model = $_POST['model'];
$money = $_POST['money'];
$cities = $_POST['city'];

$city_accept = '';

foreach ($cities as $city) {
	if (in_array($city, CITIES)) {
		$city_accept .= $city . '_';
	}
}

if ($money >= PRICES[$model] && !empty($city_accept)) {
	echo $model . '_' . $money . '_' . $city_accept . 'accept';
} else {
	echo $model . '_' . $money . '_' . $city_accept . 'denied';
}
?>