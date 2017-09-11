<?php 
declare(strict_types=1);

use PHPUnit\Framework\TestCase;

/**
 * @covers Factorialize
*/

final class FactorialTest extends TestCase
{
	public function testCase1(): void
	{
		$this->assertEquals(120, Factorial::factorialize(5)));
	}
	
	public function testCase2(): void
	{
		$this->assertEquals(3628800, Factorial::factorialize(10));
	}
	
	public function testCase3(): void
	{
		$this->assertEquals(2432902008176640000, Factorial::factorialize(20));
	}
	
	public function testCase4(): void
	{
		$this->assertEquals(1, Factorial::factorialize(0));
	}


}


/*

factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/
