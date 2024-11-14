/*
 * SPDX-FileCopyrightText: 2024 Philip Molares
 *
 * SPDX-License-Identifier: MIT
 */
import { describe, expect, it } from '@jest/globals'
import { isMerlin } from './index.js'

describe('isMerlin', () => {
  describe("returns true when ", () => {
    it("'merlin' is in the string", () => {
      expect(isMerlin('foo_merlin_bar')).toBeTruthy()
    })
    it("'MeRlIn' is in the string", () => {
      expect(isMerlin('foo_MeRlIn_bar')).toBeTruthy()
    })
    it("'MERLIN' is in the string", () => {
      expect(isMerlin('foo_MERLIN_bar')).toBeTruthy()
    })
    it("'ruhrscholz' is in the string", () => {
      expect(isMerlin('ruhrscholz')).toBeTruthy()
    })
    it("'RUHR scholz' is in the string", () => {
      expect(isMerlin('RUHR scholz')).toBeTruthy()
    })
    it("'RuHr_ScHoLz' is in the string", () => {
      expect(isMerlin('RuHr_ScHoLz')).toBeTruthy()
    })
    it("'RUHR-SCHOLZ' is in the string", () => {
      expect(isMerlin('RUHR-SCHOLZ')).toBeTruthy()
    })
  })
  describe('returns false when', () => {
    it("'mer' is in the string", () => {
      expect(isMerlin('foo_mer_bar')).toBeFalsy()
    })
    it("'merli' is in the string", () => {
      expect(isMerlin('foo_merli_bar')).toBeFalsy()
    })
    it("'ruhtscholz' is in the string", () => {
      expect(isMerlin('ruhtscholz')).toBeFalsy()
    })
  })
})