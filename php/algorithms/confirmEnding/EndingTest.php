<?php 
declare(strict_types=1);

use PHPUnit\Framework\TestCase;

/**
 * @covers confirmEnding
*/

final class EndingTest extends TestCase
{
	public function testCase1(): void
	{
		$this->assertEquals(true, Ending::confirmEnding("Bastian", "n")));
	}
	
	public function testCase2(): void
	{
		$this->assertEquals(false, Ending::confirmEnding("Connor", "n"));
	}
	
	public function testCase3(): void
	{
		$this->assertEquals(false, Ending::confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
	}
	
	public function testCase4(): void
	{
		$this->assertEquals(true, Ending::confirmEnding("Open sesame", "same"));
	}


}
