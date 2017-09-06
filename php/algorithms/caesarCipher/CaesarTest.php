<?php 
declare(strict_types=1);

use PHPUnit\Framework\TestCase;
//require './Caesar.php';

/**
 * @covers rot13 ('Caesars cipher')
*/

final class CaesarTest extends TestCase
{
	public function testCase1(): void
	{
		$this->assertEquals("SERR PBQR PNZC", Caesar::rot13("FREE CODE CAMP"));
	}
	
	public function testCase2(): void
	{
		$this->assertEquals("SERR CVMMN!", Caesar::rot13("FREE PIZZA!"));
	}
	
	public function testCase3(): void
	{
		$this->assertEquals("SERR YBIR?", Caesar::rot13("FREE LOVE?"));
	}
	
	public function testCase4(): void
	{
		$this->assertEquals("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.", Caesar::rot13("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."));
	}
	

}

/*
rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/

