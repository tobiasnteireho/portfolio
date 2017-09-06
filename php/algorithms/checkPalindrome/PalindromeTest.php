<?php 
declare(strict_types=1);

use PHPUnit\Framework\TestCase;

/**
 * @covers palindrome
*/

final class PalindromeTest extends TestCase
{
	public function testCase1(): void
	{
		$this->assertEquals(true, Palindrome::isPalindrome("eye"));
	}
	
	public function testCase2(): void
	{
		$this->assertEquals(true, Palindrome::isPalindrome("race car"));
	}
	
	public function testCase3(): void
	{
		$this->assertEquals(false, Palindrome::isPalindrome("not a palindrome"));
	}
	
	public function testCase4(): void
	{
		$this->assertEquals(true, Palindrome::isPalindrome("A man, a plan, a canal. Panama"));
	}


}
